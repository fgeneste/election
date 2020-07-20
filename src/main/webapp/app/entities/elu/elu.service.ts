import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IElu } from 'app/shared/model/elu.model';

type EntityResponseType = HttpResponse<IElu>;
type EntityArrayResponseType = HttpResponse<IElu[]>;

@Injectable({ providedIn: 'root' })
export class EluService {
  public resourceUrl = SERVER_API_URL + 'api/elus';

  constructor(protected http: HttpClient) {}

  create(elu: IElu): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(elu);
    return this.http
      .post<IElu>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(elu: IElu): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(elu);
    return this.http
      .put<IElu>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IElu>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IElu[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(elu: IElu): IElu {
    const copy: IElu = Object.assign({}, elu, {
      dateNaissance: elu.dateNaissance && elu.dateNaissance.isValid() ? elu.dateNaissance.format(DATE_FORMAT) : undefined,
      dateNaissanceSupp: elu.dateNaissanceSupp && elu.dateNaissanceSupp.isValid() ? elu.dateNaissanceSupp.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateNaissance = res.body.dateNaissance ? moment(res.body.dateNaissance) : undefined;
      res.body.dateNaissanceSupp = res.body.dateNaissanceSupp ? moment(res.body.dateNaissanceSupp) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((elu: IElu) => {
        elu.dateNaissance = elu.dateNaissance ? moment(elu.dateNaissance) : undefined;
        elu.dateNaissanceSupp = elu.dateNaissanceSupp ? moment(elu.dateNaissanceSupp) : undefined;
      });
    }
    return res;
  }
}
