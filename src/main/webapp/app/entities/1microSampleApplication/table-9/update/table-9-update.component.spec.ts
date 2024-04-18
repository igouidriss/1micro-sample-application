import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table9Service } from '../service/table-9.service';
import { ITable9 } from '../table-9.model';
import { Table9FormService } from './table-9-form.service';

import { Table9UpdateComponent } from './table-9-update.component';

describe('Table9 Management Update Component', () => {
  let comp: Table9UpdateComponent;
  let fixture: ComponentFixture<Table9UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table9FormService: Table9FormService;
  let table9Service: Table9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table9UpdateComponent],
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
      .overrideTemplate(Table9UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table9UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table9FormService = TestBed.inject(Table9FormService);
    table9Service = TestBed.inject(Table9Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table9: ITable9 = { id: 456 };

      activatedRoute.data = of({ table9 });
      comp.ngOnInit();

      expect(comp.table9).toEqual(table9);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable9>>();
      const table9 = { id: 123 };
      jest.spyOn(table9FormService, 'getTable9').mockReturnValue(table9);
      jest.spyOn(table9Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table9 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table9 }));
      saveSubject.complete();

      // THEN
      expect(table9FormService.getTable9).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table9Service.update).toHaveBeenCalledWith(expect.objectContaining(table9));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable9>>();
      const table9 = { id: 123 };
      jest.spyOn(table9FormService, 'getTable9').mockReturnValue({ id: null });
      jest.spyOn(table9Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table9: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table9 }));
      saveSubject.complete();

      // THEN
      expect(table9FormService.getTable9).toHaveBeenCalled();
      expect(table9Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable9>>();
      const table9 = { id: 123 };
      jest.spyOn(table9Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table9 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table9Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
