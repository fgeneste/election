import { Moment } from 'moment';
import { ISen } from 'app/shared/model/sen.model';
import { ICandidat } from 'app/shared/model/candidat.model';
import { ICsp } from 'app/shared/model/csp.model';
import { IDpt } from 'app/shared/model/dpt.model';
import { Sexe } from 'app/shared/model/enumerations/sexe.model';

export interface IElu {
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
  tourElection?: string;
  elusen?: ISen;
  suppleantsen?: ISen;
  candidat?: ICandidat;
  csp?: ICsp;
  dpt?: IDpt;
}

export class Elu implements IElu {
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
    public tourElection?: string,
    public elusen?: ISen,
    public suppleantsen?: ISen,
    public candidat?: ICandidat,
    public csp?: ICsp,
    public dpt?: IDpt
  ) {
    this.sortant = this.sortant || false;
  }
}
