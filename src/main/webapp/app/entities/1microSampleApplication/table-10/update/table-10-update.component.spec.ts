import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table10Service } from '../service/table-10.service';
import { ITable10 } from '../table-10.model';
import { Table10FormService } from './table-10-form.service';

import { Table10UpdateComponent } from './table-10-update.component';

describe('Table10 Management Update Component', () => {
  let comp: Table10UpdateComponent;
  let fixture: ComponentFixture<Table10UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table10FormService: Table10FormService;
  let table10Service: Table10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table10UpdateComponent],
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
      .overrideTemplate(Table10UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table10UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table10FormService = TestBed.inject(Table10FormService);
    table10Service = TestBed.inject(Table10Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table10: ITable10 = { id: 456 };

      activatedRoute.data = of({ table10 });
      comp.ngOnInit();

      expect(comp.table10).toEqual(table10);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable10>>();
      const table10 = { id: 123 };
      jest.spyOn(table10FormService, 'getTable10').mockReturnValue(table10);
      jest.spyOn(table10Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table10 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table10 }));
      saveSubject.complete();

      // THEN
      expect(table10FormService.getTable10).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table10Service.update).toHaveBeenCalledWith(expect.objectContaining(table10));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable10>>();
      const table10 = { id: 123 };
      jest.spyOn(table10FormService, 'getTable10').mockReturnValue({ id: null });
      jest.spyOn(table10Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table10: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table10 }));
      saveSubject.complete();

      // THEN
      expect(table10FormService.getTable10).toHaveBeenCalled();
      expect(table10Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable10>>();
      const table10 = { id: 123 };
      jest.spyOn(table10Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table10 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table10Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
