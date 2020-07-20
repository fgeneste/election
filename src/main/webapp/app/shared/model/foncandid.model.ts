export interface IFoncandid {
  id?: number;
  foncandidcod?: string;
  foncandidlibfem?: string;
  foncandidlib?: string;
  foncandidlic?: string;
  foncandidlicfem?: string;
}

export class Foncandid implements IFoncandid {
  constructor(
    public id?: number,
    public foncandidcod?: string,
    public foncandidlibfem?: string,
    public foncandidlib?: string,
    public foncandidlic?: string,
    public foncandidlicfem?: string
  ) {}
}
