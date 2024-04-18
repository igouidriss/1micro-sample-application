import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITable7 } from '../table-7.model';
import { Table7Service } from '../service/table-7.service';

const table7Resolve = (route: ActivatedRouteSnapshot): Observable<null | ITable7> => {
  const id = route.params['id'];
  if (id) {
    return inject(Table7Service)
      .find(id)
      .pipe(
        mergeMap((table7: HttpResponse<ITable7>) => {
          if (table7.body) {
            return of(table7.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default table7Resolve;
