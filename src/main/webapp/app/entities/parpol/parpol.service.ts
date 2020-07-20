import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IParpol } from 'app/shared/model/parpol.model';

type EntityResponseType = HttpResponse<IParpol>;
type EntityArrayResponseType = HttpResponse<IParpol[]>;

@Injectable({ providedIn: 'root' })
export class ParpolService {
  public resourceUrl = SERVER_API_URL + 'api/parpols';

  constructor(protected http: HttpClient) {}

  create(parpol: IParpol): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(parpol);
    return this.http
      .post<IParpol>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(parpol: IParpol): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(parpol);
    return this.http
      .put<IParpol>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IParpol>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IParpol[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(parpol: IParpol): IParpol {
    const copy: IParpol = Object.assign({}, parpol, {
      orgdatfin: parpol.orgdatfin && parpol.orgdatfin.isValid() ? parpol.orgdatfin.format(DATE_FORMAT) : undefined,
      syscredat: parpol.syscredat && parpol.syscredat.isValid() ? parpol.syscredat.format(DATE_FORMAT) : undefined,
      sysmajdat: parpol.sysmajdat && parpol.sysmajdat.isValid() ? parpol.sysmajdat.format(DATE_FORMAT) : undefined,
      orgdatcre: parpol.orgdatcre && parpol.orgdatcre.isValid() ? parpol.orgdatcre.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.orgdatfin = res.body.orgdatfin ? moment(res.body.orgdatfin) : undefined;
      res.body.syscredat = res.body.syscredat ? moment(res.body.syscredat) : undefined;
      res.body.sysmajdat = res.body.sysmajdat ? moment(res.body.sysmajdat) : undefined;
      res.body.orgdatcre = res.body.orgdatcre ? moment(res.body.orgdatcre) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((parpol: IParpol) => {
        parpol.orgdatfin = parpol.orgdatfin ? moment(parpol.orgdatfin) : undefined;
        parpol.syscredat = parpol.syscredat ? moment(parpol.syscredat) : undefined;
        parpol.sysmajdat = parpol.sysmajdat ? moment(parpol.sysmajdat) : undefined;
        parpol.orgdatcre = parpol.orgdatcre ? moment(parpol.orgdatcre) : undefined;
      });
    }
    return res;
  }
}
