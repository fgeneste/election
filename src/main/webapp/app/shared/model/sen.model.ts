import { Moment } from 'moment';
import { IAssociation } from 'app/shared/model/association.model';

export interface ISen {
  id?: number;
  senmat?: string;
  quacod?: string;
  sennomuse?: string;
  sennompat?: string;
  sennommar?: string;
  sennomtec?: string;
  senprenomuse?: string;
  senprenomciv?: string;
  sendatnai?: Moment;
  senlienai?: string;
  sendatdec?: Moment;
  etasencod?: string;
  sendespro?: string;
  pcscod?: string;
  catprocod?: string;
  senrngprt?: number;
  sengrppolcodcou?: string;
  sengrppolliccou?: string;
  sentypappcou?: string;
  sencomcodcou?: string;
  sencomliccou?: string;
  sencirnumcou?: number;
  sencircou?: string;
  senburliccou?: string;
  senema?: string;
  sennumtelsen?: string;
  sendiplome?: string;
  sendecora?: string;
  sendatpreele?: Moment;
  indid?: number;
  sennomusecap?: string;
  senpagper?: string;
  senrngprtcod?: string;
  parpolorgcod?: string;
  senliedec?: string;
  sendptnumnai?: number;
  sendptnumdec?: number;
  senauttra?: string;
  senlog?: string;
  sencrinom?: string;
  senfem?: string;
  senautema?: string;
  senautgrpsen?: string;
  senautpagper?: string;
  sennbrque?: number;
  sennomdis?: string;
  numsen?: string;
  sennumsie?: number;
  sennbrvid?: number;
  sennomdit?: string;
  titnobcod?: string;
  association?: IAssociation;
}

export class Sen implements ISen {
  constructor(
    public id?: number,
    public senmat?: string,
    public quacod?: string,
    public sennomuse?: string,
    public sennompat?: string,
    public sennommar?: string,
    public sennomtec?: string,
    public senprenomuse?: string,
    public senprenomciv?: string,
    public sendatnai?: Moment,
    public senlienai?: string,
    public sendatdec?: Moment,
    public etasencod?: string,
    public sendespro?: string,
    public pcscod?: string,
    public catprocod?: string,
    public senrngprt?: number,
    public sengrppolcodcou?: string,
    public sengrppolliccou?: string,
    public sentypappcou?: string,
    public sencomcodcou?: string,
    public sencomliccou?: string,
    public sencirnumcou?: number,
    public sencircou?: string,
    public senburliccou?: string,
    public senema?: string,
    public sennumtelsen?: string,
    public sendiplome?: string,
    public sendecora?: string,
    public sendatpreele?: Moment,
    public indid?: number,
    public sennomusecap?: string,
    public senpagper?: string,
    public senrngprtcod?: string,
    public parpolorgcod?: string,
    public senliedec?: string,
    public sendptnumnai?: number,
    public sendptnumdec?: number,
    public senauttra?: string,
    public senlog?: string,
    public sencrinom?: string,
    public senfem?: string,
    public senautema?: string,
    public senautgrpsen?: string,
    public senautpagper?: string,
    public sennbrque?: number,
    public sennomdis?: string,
    public numsen?: string,
    public sennumsie?: number,
    public sennbrvid?: number,
    public sennomdit?: string,
    public titnobcod?: string,
    public association?: IAssociation
  ) {}
}
