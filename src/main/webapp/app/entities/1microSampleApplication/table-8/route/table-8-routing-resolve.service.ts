import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable8 } from '../table-8.model';
import { Table8Service } from '../service/table-8.service';

const table8Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable8> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table8Service)
      .find(id)
      .pipe(
        mergeMap((table8: HttpResponse<ITable8>) => {
          if (table8.body) {
            return of(table8.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table8Resolve;
