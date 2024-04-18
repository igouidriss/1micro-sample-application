import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table6Service } from '../service/table-6.service';
import { ITable6 } from '../table-6.model';
import { Table6FormService } from './table-6-form.service';

import { Table6UpdateComponent } from './table-6-update.component';

describe('Table6 Management Update Component', () => {
  let comp: Table6UpdateComponent;
  let fixture: ComponentFixture<Table6UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table6FormService: Table6FormService;
  let table6Service: Table6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table6UpdateComponent],
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
      .overrideTemplate(Table6UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table6UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table6FormService = TestBed.inject(Table6FormService);
    table6Service = TestBed.inject(Table6Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table6: ITable6 = { id: 456 };

      activatedRoute.data = of({ table6 });
      comp.ngOnInit();

      expect(comp.table6).toEqual(table6);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable6>>();
      const table6 = { id: 123 };
      jest.spyOn(table6FormService, 'getTable6').mockReturnValue(table6);
      jest.spyOn(table6Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table6 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table6 }));
      saveSubject.complete();

      // THEN
      expect(table6FormService.getTable6).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table6Service.update).toHaveBeenCalledWith(expect.objectContaining(table6));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable6>>();
      const table6 = { id: 123 };
      jest.spyOn(table6FormService, 'getTable6').mockReturnValue({ id: null });
      jest.spyOn(table6Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table6: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table6 }));
      saveSubject.complete();

      // THEN
      expect(table6FormService.getTable6).toHaveBeenCalled();
      expect(table6Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable6>>();
      const table6 = { id: 123 };
      jest.spyOn(table6Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table6 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table6Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
