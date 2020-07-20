import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ISen, Sen } from 'app/shared/model/sen.model';
import { SenService } from './sen.service';
import { SenComponent } from './sen.component';
import { SenDetailComponent } from './sen-detail.component';
import { SenUpdateComponent } from './sen-update.component';

@Injectable({ providedIn: 'root' })
export class SenResolve implements Resolve<ISen> {
  constructor(private service: SenService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISen> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((sen: HttpResponse<Sen>) => {
          if (sen.body) {
            return of(sen.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Sen());
  }
}

export const senRoute: Routes = [
  {
    path: '',
    component: SenComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'Sens',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: SenDetailComponent,
    resolve: {
      sen: SenResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Sens',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: SenUpdateComponent,
    resolve: {
      sen: SenResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Sens',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: SenUpdateComponent,
    resolve: {
      sen: SenResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Sens',
    },
    canActivate: [UserRouteAccessService],
  },
];
