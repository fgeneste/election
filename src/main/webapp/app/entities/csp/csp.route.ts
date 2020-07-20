import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICsp, Csp } from 'app/shared/model/csp.model';
import { CspService } from './csp.service';
import { CspComponent } from './csp.component';
import { CspDetailComponent } from './csp-detail.component';
import { CspUpdateComponent } from './csp-update.component';

@Injectable({ providedIn: 'root' })
export class CspResolve implements Resolve<ICsp> {
  constructor(private service: CspService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICsp> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((csp: HttpResponse<Csp>) => {
          if (csp.body) {
            return of(csp.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Csp());
  }
}

export const cspRoute: Routes = [
  {
    path: '',
    component: CspComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'Csps',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CspDetailComponent,
    resolve: {
      csp: CspResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Csps',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CspUpdateComponent,
    resolve: {
      csp: CspResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Csps',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CspUpdateComponent,
    resolve: {
      csp: CspResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Csps',
    },
    canActivate: [UserRouteAccessService],
  },
];
