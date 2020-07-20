import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IResultatDetaille, ResultatDetaille } from 'app/shared/model/resultat-detaille.model';
import { ResultatDetailleService } from './resultat-detaille.service';
import { ResultatDetailleComponent } from './resultat-detaille.component';
import { ResultatDetailleDetailComponent } from './resultat-detaille-detail.component';
import { ResultatDetailleUpdateComponent } from './resultat-detaille-update.component';

@Injectable({ providedIn: 'root' })
export class ResultatDetailleResolve implements Resolve<IResultatDetaille> {
  constructor(private service: ResultatDetailleService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IResultatDetaille> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((resultatDetaille: HttpResponse<ResultatDetaille>) => {
          if (resultatDetaille.body) {
            return of(resultatDetaille.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ResultatDetaille());
  }
}

export const resultatDetailleRoute: Routes = [
  {
    path: '',
    component: ResultatDetailleComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'ResultatDetailles',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ResultatDetailleDetailComponent,
    resolve: {
      resultatDetaille: ResultatDetailleResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'ResultatDetailles',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ResultatDetailleUpdateComponent,
    resolve: {
      resultatDetaille: ResultatDetailleResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'ResultatDetailles',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ResultatDetailleUpdateComponent,
    resolve: {
      resultatDetaille: ResultatDetailleResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'ResultatDetailles',
    },
    canActivate: [UserRouteAccessService],
  },
];
