import { Moment } from 'moment';
import { IResultatDetaille } from 'app/shared/model/resultat-detaille.model';

export interface IResultat {
  id?: number;
  dateExport?: Moment;
  numeroDepartement?: string;
  libelleDepartement?: string;
  noTour?: string;
  inscrits?: number;
  abstentions?: number;
  absOnIns?: number;
  votants?: number;
  votOnIns?: number;
  blancs?: number;
  blancsOnIns?: number;
  blancsOnVot?: number;
  nuls?: number;
  nulsOnIns?: number;
  nulsOnVot?: number;
  exprime?: number;
  expOnIns?: number;
  expOnVot?: number;
  resultatDetailles?: IResultatDetaille[];
}

export class Resultat implements IResultat {
  constructor(
    public id?: number,
    public dateExport?: Moment,
    public numeroDepartement?: string,
    public libelleDepartement?: string,
    public noTour?: string,
    public inscrits?: number,
    public abstentions?: number,
    public absOnIns?: number,
    public votants?: number,
    public votOnIns?: number,
    public blancs?: number,
    public blancsOnIns?: number,
    public blancsOnVot?: number,
    public nuls?: number,
    public nulsOnIns?: number,
    public nulsOnVot?: number,
    public exprime?: number,
    public expOnIns?: number,
    public expOnVot?: number,
    public resultatDetailles?: IResultatDetaille[]
  ) {}
}
