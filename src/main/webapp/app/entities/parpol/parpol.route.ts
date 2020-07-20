import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IParpol, Parpol } from 'app/shared/model/parpol.model';
import { ParpolService } from './parpol.service';
import { ParpolComponent } from './parpol.component';
import { ParpolDetailComponent } from './parpol-detail.component';
import { ParpolUpdateComponent } from './parpol-update.component';

@Injectable({ providedIn: 'root' })
export class ParpolResolve implements Resolve<IParpol> {
  constructor(private service: ParpolService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IParpol> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((parpol: HttpResponse<Parpol>) => {
          if (parpol.body) {
            return of(parpol.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Parpol());
  }
}

export const parpolRoute: Routes = [
  {
    path: '',
    component: ParpolComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Parpols',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ParpolDetailComponent,
    resolve: {
      parpol: ParpolResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Parpols',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ParpolUpdateComponent,
    resolve: {
      parpol: ParpolResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Parpols',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ParpolUpdateComponent,
    resolve: {
      parpol: ParpolResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Parpols',
    },
    canActivate: [UserRouteAccessService],
  },
];
