import { ICandidat } from 'app/shared/model/candidat.model';
import { ISen } from 'app/shared/model/sen.model';

export interface IAssociation {
  id?: number;
  score?: number;
  candidat?: ICandidat;
  sen?: ISen;
}

export class Association implements IAssociation {
  constructor(public id?: number, public score?: number, public candidat?: ICandidat, public sen?: ISen) {}
}
