import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { Table8Service } from '../service/table-8.service';
import { ITable8 } from '../table-8.model';
import { Table8FormService } from './table-8-form.service';

import { Table8UpdateComponent } from './table-8-update.component';

describe('Table8 Management Update Component', () => {
  let comp: Table8UpdateComponent;
  let fixture: ComponentFixture<Table8UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let table8FormService: Table8FormService;
  let table8Service: Table8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Table8UpdateComponent],
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
      .overrideTemplate(Table8UpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(Table8UpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    table8FormService = TestBed.inject(Table8FormService);
    table8Service = TestBed.inject(Table8Service);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const table8: ITable8 = { id: 456 };

      activatedRoute.data = of({ table8 });
      comp.ngOnInit();

      expect(comp.table8).toEqual(table8);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable8>>();
      const table8 = { id: 123 };
      jest.spyOn(table8FormService, 'getTable8').mockReturnValue(table8);
      jest.spyOn(table8Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table8 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table8 }));
      saveSubject.complete();

      // THEN
      expect(table8FormService.getTable8).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(table8Service.update).toHaveBeenCalledWith(expect.objectContaining(table8));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable8>>();
      const table8 = { id: 123 };
      jest.spyOn(table8FormService, 'getTable8').mockReturnValue({ id: null });
      jest.spyOn(table8Service, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table8: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: table8 }));
      saveSubject.complete();

      // THEN
      expect(table8FormService.getTable8).toHaveBeenCalled();
      expect(table8Service.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ITable8>>();
      const table8 = { id: 123 };
      jest.spyOn(table8Service, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ table8 });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(table8Service.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
