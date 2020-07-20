import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IResultatDetaille } from 'app/shared/model/resultat-detaille.model';

type EntityResponseType = HttpResponse<IResultatDetaille>;
type EntityArrayResponseType = HttpResponse<IResultatDetaille[]>;

@Injectable({ providedIn: 'root' })
export class ResultatDetailleService {
  public resourceUrl = SERVER_API_URL + 'api/resultat-detailles';

  constructor(protected http: HttpClient) {}

  create(resultatDetaille: IResultatDetaille): Observable<EntityResponseType> {
    return this.http.post<IResultatDetaille>(this.resourceUrl, resultatDetaille, { observe: 'response' });
  }

  update(resultatDetaille: IResultatDetaille): Observable<EntityResponseType> {
    return this.http.put<IResultatDetaille>(this.resourceUrl, resultatDetaille, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IResultatDetaille>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IResultatDetaille[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
