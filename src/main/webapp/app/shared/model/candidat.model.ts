import { Moment } from 'moment';
import { ISen } from 'app/shared/model/sen.model';
import { IElu } from 'app/shared/model/elu.model';
import { IAssociation } from 'app/shared/model/association.model';
import { ICsp } from 'app/shared/model/csp.model';
import { IDpt } from 'app/shared/model/dpt.model';
import { Sexe } from 'app/shared/model/enumerations/sexe.model';

export interface ICandidat {
  id?: number;
  libelleDepartement?: string;
  numeroDepot?: number;
  numeroDepotListe?: number;
  libelleListe?: string;
  noOrdreListe?: number;
  sexe?: Sexe;
  nom?: string;
  prenom?: string;
  dateNaissance?: Moment;
  nuance?: string;
  profession?: string;
  personnalite?: string;
  sortant?: boolean;
  sexeSupp?: string;
  nomSupp?: string;
  prenomSupp?: string;
  dateNaissanceSupp?: Moment;
  isElu?: boolean;
  candidatreconnu?: ISen;
  suppleantreconnu?: ISen;
  elu?: IElu;
  association?: IAssociation;
  csp?: ICsp;
  dpt?: IDpt;
}

export class Candidat implements ICandidat {
  constructor(
    public id?: number,
    public libelleDepartement?: string,
    public numeroDepot?: number,
    public numeroDepotListe?: number,
    public libelleListe?: string,
    public noOrdreListe?: number,
    public sexe?: Sexe,
    public nom?: string,
    public prenom?: string,
    public dateNaissance?: Moment,
    public nuance?: string,
    public profession?: string,
    public personnalite?: string,
    public sortant?: boolean,
    public sexeSupp?: string,
    public nomSupp?: string,
    public prenomSupp?: string,
    public dateNaissanceSupp?: Moment,
    public isElu?: boolean,
    public candidatreconnu?: ISen,
    public suppleantreconnu?: ISen,
    public elu?: IElu,
    public association?: IAssociation,
    public csp?: ICsp,
    public dpt?: IDpt
  ) {
    this.sortant = this.sortant || false;
    this.isElu = this.isElu || false;
  }
}
