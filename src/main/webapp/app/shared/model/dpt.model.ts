import { Moment } from 'moment';
import { ICandidat } from 'app/shared/model/candidat.model';
import { IElu } from 'app/shared/model/elu.model';

export interface IDpt {
  id?: number;
  dptnum?: string;
  dptcod?: string;
  dptlib?: string;
  dptnbrsen?: number;
  dptmodscrsen?: string;
  dptser?: string;
  regcod?: string;
  dptnumtri?: number;
  dptcodsirpas?: string;
  dptlic?: string;
  dptart?: string;
  dptlibtri?: string;
  temvalcod?: string;
  evelic?: string;
  evelib?: string;
  evelil?: string;
  eveobs?: string;
  dptser2004?: string;
  dptcmt?: string;
  dptcmtaff?: string;
  dptdatdeb?: Moment;
  dptdatfin?: Moment;
  evetempub?: string;
  dpturlcmp?: string;
  dptminintcod?: string;
  syscredat?: Moment;
  syscrelog?: string;
  sysmajdat?: Moment;
  sysmajlog?: string;
  candidats?: ICandidat[];
  elus?: IElu[];
}

export class Dpt implements IDpt {
  constructor(
    public id?: number,
    public dptnum?: string,
    public dptcod?: string,
    public dptlib?: string,
    public dptnbrsen?: number,
    public dptmodscrsen?: string,
    public dptser?: string,
    public regcod?: string,
    public dptnumtri?: number,
    public dptcodsirpas?: string,
    public dptlic?: string,
    public dptart?: string,
    public dptlibtri?: string,
    public temvalcod?: string,
    public evelic?: string,
    public evelib?: string,
    public evelil?: string,
    public eveobs?: string,
    public dptser2004?: string,
    public dptcmt?: string,
    public dptcmtaff?: string,
    public dptdatdeb?: Moment,
    public dptdatfin?: Moment,
    public evetempub?: string,
    public dpturlcmp?: string,
    public dptminintcod?: string,
    public syscredat?: Moment,
    public syscrelog?: string,
    public sysmajdat?: Moment,
    public sysmajlog?: string,
    public candidats?: ICandidat[],
    public elus?: IElu[]
  ) {}
}
