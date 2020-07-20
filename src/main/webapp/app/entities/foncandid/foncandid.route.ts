import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IFoncandid, Foncandid } from 'app/shared/model/foncandid.model';
import { FoncandidService } from './foncandid.service';
import { FoncandidComponent } from './foncandid.component';
import { FoncandidDetailComponent } from './foncandid-detail.component';
import { FoncandidUpdateComponent } from './foncandid-update.component';

@Injectable({ providedIn: 'root' })
export class FoncandidResolve implements Resolve<IFoncandid> {
  constructor(private service: FoncandidService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IFoncandid> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((foncandid: HttpResponse<Foncandid>) => {
          if (foncandid.body) {
            return of(foncandid.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Foncandid());
  }
}

export const foncandidRoute: Routes = [
  {
    path: '',
    component: FoncandidComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Foncandids',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: FoncandidDetailComponent,
    resolve: {
      foncandid: FoncandidResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Foncandids',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: FoncandidUpdateComponent,
    resolve: {
      foncandid: FoncandidResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Foncandids',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: FoncandidUpdateComponent,
    resolve: {
      foncandid: FoncandidResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Foncandids',
    },
    canActivate: [UserRouteAccessService],
  },
];
