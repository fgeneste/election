import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISen } from 'app/shared/model/sen.model';

type EntityResponseType = HttpResponse<ISen>;
type EntityArrayResponseType = HttpResponse<ISen[]>;

@Injectable({ providedIn: 'root' })
export class SenService {
  public resourceUrl = SERVER_API_URL + 'api/sens';

  constructor(protected http: HttpClient) {}

  create(sen: ISen): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(sen);
    return this.http
      .post<ISen>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(sen: ISen): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(sen);
    return this.http
      .put<ISen>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ISen>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISen[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(sen: ISen): ISen {
    const copy: ISen = Object.assign({}, sen, {
      sendatnai: sen.sendatnai && sen.sendatnai.isValid() ? sen.sendatnai.format(DATE_FORMAT) : undefined,
      sendatdec: sen.sendatdec && sen.sendatdec.isValid() ? sen.sendatdec.format(DATE_FORMAT) : undefined,
      sendatpreele: sen.sendatpreele && sen.sendatpreele.isValid() ? sen.sendatpreele.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.sendatnai = res.body.sendatnai ? moment(res.body.sendatnai) : undefined;
      res.body.sendatdec = res.body.sendatdec ? moment(res.body.sendatdec) : undefined;
      res.body.sendatpreele = res.body.sendatpreele ? moment(res.body.sendatpreele) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((sen: ISen) => {
        sen.sendatnai = sen.sendatnai ? moment(sen.sendatnai) : undefined;
        sen.sendatdec = sen.sendatdec ? moment(sen.sendatdec) : undefined;
        sen.sendatpreele = sen.sendatpreele ? moment(sen.sendatpreele) : undefined;
      });
    }
    return res;
  }
}
