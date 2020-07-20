import { Moment } from 'moment';

export interface IParpol {
  id?: number;
  tenpolcod?: string;
  orgcod?: string;
  typparpolcod?: string;
  typorgcod?: string;
  eveobs?: string;
  orgart?: string;
  orgnumtri?: number;
  orgdatfin?: Moment;
  orgnumtie?: string;
  orgurlsim?: string;
  orgurlcmp?: string;
  orgtemannu?: string;
  evetempub?: string;
  syscredat?: Moment;
  syscrelog?: string;
  sysmajdat?: Moment;
  sysmajlog?: string;
  evelil?: string;
  evelib?: string;
  evelic?: string;
  temvalcod?: string;
  orgdatcre?: Moment;
}

export class Parpol implements IParpol {
  constructor(
    public id?: number,
    public tenpolcod?: string,
    public orgcod?: string,
    public typparpolcod?: string,
    public typorgcod?: string,
    public eveobs?: string,
    public orgart?: string,
    public orgnumtri?: number,
    public orgdatfin?: Moment,
    public orgnumtie?: string,
    public orgurlsim?: string,
    public orgurlcmp?: string,
    public orgtemannu?: string,
    public evetempub?: string,
    public syscredat?: Moment,
    public syscrelog?: string,
    public sysmajdat?: Moment,
    public sysmajlog?: string,
    public evelil?: string,
    public evelib?: string,
    public evelic?: string,
    public temvalcod?: string,
    public orgdatcre?: Moment
  ) {}
}
