import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable9 } from '../table-9.model';
import { Table9Service } from '../service/table-9.service';

const table9Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable9> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table9Service)
      .find(id)
      .pipe(
        mergeMap((table9: HttpResponse<ITable9>) => {
          if (table9.body) {
            return of(table9.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table9Resolve;
