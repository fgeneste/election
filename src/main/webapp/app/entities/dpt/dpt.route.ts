import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IDpt, Dpt } from 'app/shared/model/dpt.model';
import { DptService } from './dpt.service';
import { DptComponent } from './dpt.component';
import { DptDetailComponent } from './dpt-detail.component';
import { DptUpdateComponent } from './dpt-update.component';

@Injectable({ providedIn: 'root' })
export class DptResolve implements Resolve<IDpt> {
  constructor(private service: DptService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDpt> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((dpt: HttpResponse<Dpt>) => {
          if (dpt.body) {
            return of(dpt.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Dpt());
  }
}

export const dptRoute: Routes = [
  {
    path: '',
    component: DptComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Dpts',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: DptDetailComponent,
    resolve: {
      dpt: DptResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Dpts',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: DptUpdateComponent,
    resolve: {
      dpt: DptResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Dpts',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: DptUpdateComponent,
    resolve: {
      dpt: DptResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Dpts',
    },
    canActivate: [UserRouteAccessService],
  },
];
