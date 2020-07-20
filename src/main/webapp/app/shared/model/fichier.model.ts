import { Moment } from 'moment';

export interface IFichier {
  id?: number;
  filename?: string;
  path?: string;
  type?: string;
  traite?: boolean;
  dateTraitement?: Moment;
}

export class Fichier implements IFichier {
  constructor(
    public id?: number,
    public filename?: string,
    public path?: string,
    public type?: string,
    public traite?: boolean,
    public dateTraitement?: Moment
  ) {
    this.traite = this.traite || false;
  }
}
