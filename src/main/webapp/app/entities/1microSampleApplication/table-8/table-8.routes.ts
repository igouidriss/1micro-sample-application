import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table8Component } from './list/table-8.component';
import { Table8DetailComponent } from './detail/table-8-detail.component';
import { Table8UpdateComponent } from './update/table-8-update.component';
import Table8Resolve from './route/table-8-routing-resolve.service';

const table8Route: Routes = [
  {
    path: '',
    component: Table8Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table8DetailComponent,
    resolve: {
      table8: Table8Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table8UpdateComponent,
    resolve: {
      table8: Table8Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table8UpdateComponent,
    resolve: {
      table8: Table8Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table8Route;
