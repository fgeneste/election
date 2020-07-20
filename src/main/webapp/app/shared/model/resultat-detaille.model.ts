import { IResultat } from 'app/shared/model/resultat.model';
import { Sexe } from 'app/shared/model/enumerations/sexe.model';

export interface IResultatDetaille {
  id?: number;
  noDepot?: string;
  sexe?: Sexe;
  nom?: string;
  prenom?: string;
  nuance?: string;
  resultatCandidat?: string;
  nuanceListe?: string;
  libelleListe?: string;
  teteListe?: string;
  voix?: number;
  voixOnIns?: number;
  voixOnExp?: number;
  sieges?: number;
  resultat?: IResultat;
}

export class ResultatDetaille implements IResultatDetaille {
  constructor(
    public id?: number,
    public noDepot?: string,
    public sexe?: Sexe,
    public nom?: string,
    public prenom?: string,
    public nuance?: string,
    public resultatCandidat?: string,
    public nuanceListe?: string,
    public libelleListe?: string,
    public teteListe?: string,
    public voix?: number,
    public voixOnIns?: number,
    public voixOnExp?: number,
    public sieges?: number,
    public resultat?: IResultat
  ) {}
}
