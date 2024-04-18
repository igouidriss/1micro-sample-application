import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table7Component } from './list/table-7.component';
import { Table7DetailComponent } from './detail/table-7-detail.component';
import { Table7UpdateComponent } from './update/table-7-update.component';
import Table7Resolve from './route/table-7-routing-resolve.service';

const table7Route: Routes = [
  {
    path: '',
    component: Table7Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table7DetailComponent,
    resolve: {
      table7: Table7Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table7UpdateComponent,
    resolve: {
      table7: Table7Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table7UpdateComponent,
    resolve: {
      table7: Table7Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table7Route;
