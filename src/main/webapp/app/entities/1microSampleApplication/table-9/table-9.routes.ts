import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { Table9Component } from './list/table-9.component';
import { Table9DetailComponent } from './detail/table-9-detail.component';
import { Table9UpdateComponent } from './update/table-9-update.component';
import Table9Resolve from './route/table-9-routing-resolve.service';

const table9Route: Routes = [
  {
    path: '',
    component: Table9Component,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: Table9DetailComponent,
    resolve: {
      table9: Table9Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: Table9UpdateComponent,
    resolve: {
      table9: Table9Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: Table9UpdateComponent,
    resolve: {
      table9: Table9Resolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default table9Route;
