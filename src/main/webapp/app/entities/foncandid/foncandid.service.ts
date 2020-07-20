import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IFoncandid } from 'app/shared/model/foncandid.model';

type EntityResponseType = HttpResponse<IFoncandid>;
type EntityArrayResponseType = HttpResponse<IFoncandid[]>;

@Injectable({ providedIn: 'root' })
export class FoncandidService {
  public resourceUrl = SERVER_API_URL + 'api/foncandids';

  constructor(protected http: HttpClient) {}

  create(foncandid: IFoncandid): Observable<EntityResponseType> {
    return this.http.post<IFoncandid>(this.resourceUrl, foncandid, { observe: 'response' });
  }

  update(foncandid: IFoncandid): Observable<EntityResponseType> {
    return this.http.put<IFoncandid>(this.resourceUrl, foncandid, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IFoncandid>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IFoncandid[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
