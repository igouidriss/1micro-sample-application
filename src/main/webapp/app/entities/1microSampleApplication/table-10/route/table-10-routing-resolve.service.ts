import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable10 } from '../table-10.model';
import { Table10Service } from '../service/table-10.service';

const table10Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable10> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table10Service)
      .find(id)
      .pipe(
        mergeMap((table10: HttpResponse<ITable10>) => {
          if (table10.body) {
            return of(table10.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table10Resolve;
