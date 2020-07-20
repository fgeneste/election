import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IResultat } from 'app/shared/model/resultat.model';

type EntityResponseType = HttpResponse<IResultat>;
type EntityArrayResponseType = HttpResponse<IResultat[]>;

@Injectable({ providedIn: 'root' })
export class ResultatService {
  public resourceUrl = SERVER_API_URL + 'api/resultats';

  constructor(protected http: HttpClient) {}

  create(resultat: IResultat): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(resultat);
    return this.http
      .post<IResultat>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(resultat: IResultat): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(resultat);
    return this.http
      .put<IResultat>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IResultat>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IResultat[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(resultat: IResultat): IResultat {
    const copy: IResultat = Object.assign({}, resultat, {
      dateExport: resultat.dateExport && resultat.dateExport.isValid() ? resultat.dateExport.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateExport = res.body.dateExport ? moment(res.body.dateExport) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((resultat: IResultat) => {
        resultat.dateExport = resultat.dateExport ? moment(resultat.dateExport) : undefined;
      });
    }
    return res;
  }
}
