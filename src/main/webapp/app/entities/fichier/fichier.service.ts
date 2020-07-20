import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IFichier } from 'app/shared/model/fichier.model';

type EntityResponseType = HttpResponse<IFichier>;
type EntityArrayResponseType = HttpResponse<IFichier[]>;

@Injectable({ providedIn: 'root' })
export class FichierService {
  public resourceUrl = SERVER_API_URL + 'api/fichiers';

  constructor(protected http: HttpClient) {}

  create(fichier: IFichier): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(fichier);
    return this.http
      .post<IFichier>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(fichier: IFichier): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(fichier);
    return this.http
      .put<IFichier>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IFichier>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IFichier[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(fichier: IFichier): IFichier {
    const copy: IFichier = Object.assign({}, fichier, {
      dateTraitement: fichier.dateTraitement && fichier.dateTraitement.isValid() ? fichier.dateTraitement.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateTraitement = res.body.dateTraitement ? moment(res.body.dateTraitement) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((fichier: IFichier) => {
        fichier.dateTraitement = fichier.dateTraitement ? moment(fichier.dateTraitement) : undefined;
      });
    }
    return res;
  }
}
