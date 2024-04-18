import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { ITable8 } from '../table-8.model';
import { Table8Service } from '../service/table-8.service';

import table8Resolve from './table-8-routing-resolve.service';

describe('Table8 routing resolve service', () => {
  let mockRouter: Router;
  let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
  let service: Table8Service;
  let resultTable8: ITable8 | null | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({}),
            },
          },
        },
      ],
    });
    mockRouter = TestBed.inject(Router);
    jest.spyOn(mockRouter, 'navigate').mockImplementation(() => Promise.resolve(true));
    mockActivatedRouteSnapshot = TestBed.inject(ActivatedRoute).snapshot;
    service = TestBed.inject(Table8Service);
    resultTable8 = undefined;
  });

  describe('resolve', () => {
    it('should return ITable8 returned by find', () => {
      // GIVEN
      service.find = jest.fn(id => of(new HttpResponse({ body: { id } })));
      mockActivatedRouteSnapshot.params = { id: 123 };

      // WHEN
      TestBed.runInInjectionContext(() => {
        table8Resolve(mockActivatedRouteSnapshot).subscribe({
          next(result) {
            resultTable8 = result;
          },
        });
      });

      // THEN
      expect(service.find).toBeCalledWith(123);
      expect(resultTable8).toEqual({ id: 123 });
    });

    it('should return null if id is not provided', () => {
      // GIVEN
      service.find = jest.fn();
      mockActivatedRouteSnapshot.params = {};

      // WHEN
      TestBed.runInInjectionContext(() => {
        table8Resolve(mockActivatedRouteSnapshot).subscribe({
          next(result) {
            resultTable8 = result;
          },
        });
      });

      // THEN
      expect(service.find).not.toBeCalled();
      expect(resultTable8).toEqual(null);
    });

    it('should route to 404 page if data not found in server', () => {
      // GIVEN
      jest.spyOn(service, 'find').mockReturnValue(of(new HttpResponse<ITable8>({ body: null })));
      mockActivatedRouteSnapshot.params = { id: 123 };

      // WHEN
      TestBed.runInInjectionContext(() => {
        table8Resolve(mockActivatedRouteSnapshot).subscribe({
          next(result) {
            resultTable8 = result;
          },
        });
      });

      // THEN
      expect(service.find).toBeCalledWith(123);
      expect(resultTable8).toEqual(undefined);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['404']);
    });
  });
});
