import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table7Service } from '../service/table-7.service';
import { ITable7 } from '../table-7.model';
import { Table7FormService } from './table-7-form.service';

import { Table7UpdateComponent } from './table-7-update.component';

describe('Table7 Management Update Component', () => {
  let comp: Table7UpdateComponent;
  let fixture: ComponentFixture<Table7UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table7FormService: Table7FormService;
  let table7Service: Table7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table7UpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(Table7UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table7UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table7FormService = TestBed.inject(Table7FormService);
    table7Service = TestBed.inject(Table7Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table7: ITable7 = { id: 456 };

      activatedRoute.data = of({ table7 });
      comp.ngOnInit();

      expect(comp.table7).toEqual(table7);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable7>>();
      const table7 = { id: 123 };
      jest.spyOn(table7FormService, 'getTable7').mockReturnValue(table7);
      jest.spyOn(table7Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table7 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table7 }));
      saveSubject.complete();

      // THEN
      expect(table7FormService.getTable7).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table7Service.update).toHaveBeenCalledWith(expect.objectContaining(table7));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable7>>();
      const table7 = { id: 123 };
      jest.spyOn(table7FormService, 'getTable7').mockReturnValue({ id: null });
      jest.spyOn(table7Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table7: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table7 }));
      saveSubject.complete();

      // THEN
      expect(table7FormService.getTable7).toHaveBeenCalled();
      expect(table7Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable7>>();
      const table7 = { id: 123 };
      jest.spyOn(table7Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table7 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table7Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
