import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable6 } from '../table-6.model';
import { Table6Service } from '../service/table-6.service';

const table6Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable6> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table6Service)
      .find(id)
      .pipe(
        mergeMap((table6: HttpResponse<ITable6>) => {
          if (table6.body) {
            return of(table6.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table6Resolve;
