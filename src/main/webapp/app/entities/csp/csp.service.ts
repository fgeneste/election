import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICsp } from 'app/shared/model/csp.model';

type EntityResponseType = HttpResponse<ICsp>;
type EntityArrayResponseType = HttpResponse<ICsp[]>;

@Injectable({ providedIn: 'root' })
export class CspService {
  public resourceUrl = SERVER_API_URL + 'api/csps';

  constructor(protected http: HttpClient) {}

  create(csp: ICsp): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(csp);
    return this.http
      .post<ICsp>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(csp: ICsp): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(csp);
    return this.http
      .put<ICsp>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICsp>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICsp[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(csp: ICsp): ICsp {
    const copy: ICsp = Object.assign({}, csp, {
      syscredat: csp.syscredat && csp.syscredat.isValid() ? csp.syscredat.format(DATE_FORMAT) : undefined,
      sysmajdat: csp.sysmajdat && csp.sysmajdat.isValid() ? csp.sysmajdat.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.syscredat = res.body.syscredat ? moment(res.body.syscredat) : undefined;
      res.body.sysmajdat = res.body.sysmajdat ? moment(res.body.sysmajdat) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((csp: ICsp) => {
        csp.syscredat = csp.syscredat ? moment(csp.syscredat) : undefined;
        csp.sysmajdat = csp.sysmajdat ? moment(csp.sysmajdat) : undefined;
      });
    }
    return res;
  }
}
