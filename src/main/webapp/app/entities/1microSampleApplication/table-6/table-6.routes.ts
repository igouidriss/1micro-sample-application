import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table6Component } from './list/table-6.component';
import { Table6DetailComponent } from './detail/table-6-detail.component';
import { Table6UpdateComponent } from './update/table-6-update.component';
import Table6Resolve from './route/table-6-routing-resolve.service';

const table6Route: Routes = [
  {
    path: '',
    component: Table6Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table6DetailComponent,
    resolve: {
      table6: Table6Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table6UpdateComponent,
    resolve: {
      table6: Table6Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table6UpdateComponent,
    resolve: {
      table6: Table6Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table6Route;
