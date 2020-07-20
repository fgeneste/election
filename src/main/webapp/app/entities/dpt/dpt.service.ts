import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IDpt } from 'app/shared/model/dpt.model';

type EntityResponseType = HttpResponse<IDpt>;
type EntityArrayResponseType = HttpResponse<IDpt[]>;

@Injectable({ providedIn: 'root' })
export class DptService {
  public resourceUrl = SERVER_API_URL + 'api/dpts';

  constructor(protected http: HttpClient) {}

  create(dpt: IDpt): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dpt);
    return this.http
      .post<IDpt>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(dpt: IDpt): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dpt);
    return this.http
      .put<IDpt>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDpt>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDpt[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(dpt: IDpt): IDpt {
    const copy: IDpt = Object.assign({}, dpt, {
      dptdatdeb: dpt.dptdatdeb && dpt.dptdatdeb.isValid() ? dpt.dptdatdeb.format(DATE_FORMAT) : undefined,
      dptdatfin: dpt.dptdatfin && dpt.dptdatfin.isValid() ? dpt.dptdatfin.format(DATE_FORMAT) : undefined,
      syscredat: dpt.syscredat && dpt.syscredat.isValid() ? dpt.syscredat.format(DATE_FORMAT) : undefined,
      sysmajdat: dpt.sysmajdat && dpt.sysmajdat.isValid() ? dpt.sysmajdat.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dptdatdeb = res.body.dptdatdeb ? moment(res.body.dptdatdeb) : undefined;
      res.body.dptdatfin = res.body.dptdatfin ? moment(res.body.dptdatfin) : undefined;
      res.body.syscredat = res.body.syscredat ? moment(res.body.syscredat) : undefined;
      res.body.sysmajdat = res.body.sysmajdat ? moment(res.body.sysmajdat) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((dpt: IDpt) => {
        dpt.dptdatdeb = dpt.dptdatdeb ? moment(dpt.dptdatdeb) : undefined;
        dpt.dptdatfin = dpt.dptdatfin ? moment(dpt.dptdatfin) : undefined;
        dpt.syscredat = dpt.syscredat ? moment(dpt.syscredat) : undefined;
        dpt.sysmajdat = dpt.sysmajdat ? moment(dpt.sysmajdat) : undefined;
      });
    }
    return res;
  }
}
