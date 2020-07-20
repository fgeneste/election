import { Moment } from 'moment';
import { ICandidat } from 'app/shared/model/candidat.model';
import { IElu } from 'app/shared/model/elu.model';

export interface ICsp {
  id?: number;
  cspcod?: string;
  catprocod?: string;
  cspfamcod?: string;
  csplib?: string;
  cspnumtri?: number;
  syscredat?: Moment;
  syscrelog?: string;
  sysmajdat?: Moment;
  sysmajlog?: string;
  candidats?: ICandidat[];
  elus?: IElu[];
}

export class Csp implements ICsp {
  constructor(
    public id?: number,
    public cspcod?: string,
    public catprocod?: string,
    public cspfamcod?: string,
    public csplib?: string,
    public cspnumtri?: number,
    public syscredat?: Moment,
    public syscrelog?: string,
    public sysmajdat?: Moment,
    public sysmajlog?: string,
    public candidats?: ICandidat[],
    public elus?: IElu[]
  ) {}
}
