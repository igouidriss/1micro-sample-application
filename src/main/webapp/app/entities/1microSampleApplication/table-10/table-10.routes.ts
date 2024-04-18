import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table10Component } from './list/table-10.component';
import { Table10DetailComponent } from './detail/table-10-detail.component';
import { Table10UpdateComponent } from './update/table-10-update.component';
import Table10Resolve from './route/table-10-routing-resolve.service';

const table10Route: Routes = [
  {
    path: '',
    component: Table10Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table10DetailComponent,
    resolve: {
      table10: Table10Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table10UpdateComponent,
    resolve: {
      table10: Table10Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table10UpdateComponent,
    resolve: {
      table10: Table10Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table10Route;
