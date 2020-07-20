import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICandidat, Candidat } from 'app/shared/model/candidat.model';
import { CandidatService } from './candidat.service';
import { ISen } from 'app/shared/model/sen.model';
import { SenService } from 'app/entities/sen/sen.service';
import { IElu } from 'app/shared/model/elu.model';
import { EluService } from 'app/entities/elu/elu.service';
import { ICsp } from 'app/shared/model/csp.model';
import { CspService } from 'app/entities/csp/csp.service';
import { IDpt } from 'app/shared/model/dpt.model';
import { DptService } from 'app/entities/dpt/dpt.service';

type SelectableEntity = ISen | IElu | ICsp | IDpt;

@Component({
  selector: 'jhi-candidat-update',
  templateUrl: './candidat-update.component.html',
})
export class CandidatUpdateComponent implements OnInit {
  isSaving = false;
  candidatreconnus: ISen[] = [];
  suppleantreconnus: ISen[] = [];
  elus: IElu[] = [];
  csps: ICsp[] = [];
  dpts: IDpt[] = [];
  dateNaissanceDp: any;
  dateNaissanceSuppDp: any;

  editForm = this.fb.group({
    id: [],
    libelleDepartement: [],
    numeroDepot: [],
    numeroDepotListe: [],
    libelleListe: [],
    noOrdreListe: [],
    sexe: [],
    nom: [],
    prenom: [],
    dateNaissance: [],
    nuance: [],
    profession: [],
    personnalite: [],
    sortant: [],
    sexeSupp: [],
    nomSupp: [],
    prenomSupp: [],
    dateNaissanceSupp: [],
    isElu: [],
    candidatreconnu: [],
    suppleantreconnu: [],
    elu: [],
    csp: [],
    dpt: [],
  });

  constructor(
    protected candidatService: CandidatService,
    protected senService: SenService,
    protected eluService: EluService,
    protected cspService: CspService,
    protected dptService: DptService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ candidat }) => {
      this.updateForm(candidat);

      this.senService
        .query({ filter: 'candidat-is-null' })
        .pipe(
          map((res: HttpResponse<ISen[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: ISen[]) => {
          if (!candidat.candidatreconnu || !candidat.candidatreconnu.id) {
            this.candidatreconnus = resBody;
          } else {
            this.senService
              .find(candidat.candidatreconnu.id)
              .pipe(
                map((subRes: HttpResponse<ISen>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: ISen[]) => (this.candidatreconnus = concatRes));
          }
        });

      this.senService
        .query({ filter: 'candidat-is-null' })
        .pipe(
          map((res: HttpResponse<ISen[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: ISen[]) => {
          if (!candidat.suppleantreconnu || !candidat.suppleantreconnu.id) {
            this.suppleantreconnus = resBody;
          } else {
            this.senService
              .find(candidat.suppleantreconnu.id)
              .pipe(
                map((subRes: HttpResponse<ISen>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: ISen[]) => (this.suppleantreconnus = concatRes));
          }
        });

      this.eluService
        .query({ filter: 'candidat-is-null' })
        .pipe(
          map((res: HttpResponse<IElu[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: IElu[]) => {
          if (!candidat.elu || !candidat.elu.id) {
            this.elus = resBody;
          } else {
            this.eluService
              .find(candidat.elu.id)
              .pipe(
                map((subRes: HttpResponse<IElu>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: IElu[]) => (this.elus = concatRes));
          }
        });

      this.cspService.query().subscribe((res: HttpResponse<ICsp[]>) => (this.csps = res.body || []));

      this.dptService.query().subscribe((res: HttpResponse<IDpt[]>) => (this.dpts = res.body || []));
    });
  }

  updateForm(candidat: ICandidat): void {
    this.editForm.patchValue({
      id: candidat.id,
      libelleDepartement: candidat.libelleDepartement,
      numeroDepot: candidat.numeroDepot,
      numeroDepotListe: candidat.numeroDepotListe,
      libelleListe: candidat.libelleListe,
      noOrdreListe: candidat.noOrdreListe,
      sexe: candidat.sexe,
      nom: candidat.nom,
      prenom: candidat.prenom,
      dateNaissance: candidat.dateNaissance,
      nuance: candidat.nuance,
      profession: candidat.profession,
      personnalite: candidat.personnalite,
      sortant: candidat.sortant,
      sexeSupp: candidat.sexeSupp,
      nomSupp: candidat.nomSupp,
      prenomSupp: candidat.prenomSupp,
      dateNaissanceSupp: candidat.dateNaissanceSupp,
      isElu: candidat.isElu,
      candidatreconnu: candidat.candidatreconnu,
      suppleantreconnu: candidat.suppleantreconnu,
      elu: candidat.elu,
      csp: candidat.csp,
      dpt: candidat.dpt,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const candidat = this.createFromForm();
    if (candidat.id !== undefined) {
      this.subscribeToSaveResponse(this.candidatService.update(candidat));
    } else {
      this.subscribeToSaveResponse(this.candidatService.create(candidat));
    }
  }

  private createFromForm(): ICandidat {
    return {
      ...new Candidat(),
      id: this.editForm.get(['id'])!.value,
      libelleDepartement: this.editForm.get(['libelleDepartement'])!.value,
      numeroDepot: this.editForm.get(['numeroDepot'])!.value,
      numeroDepotListe: this.editForm.get(['numeroDepotListe'])!.value,
      libelleListe: this.editForm.get(['libelleListe'])!.value,
      noOrdreListe: this.editForm.get(['noOrdreListe'])!.value,
      sexe: this.editForm.get(['sexe'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      dateNaissance: this.editForm.get(['dateNaissance'])!.value,
      nuance: this.editForm.get(['nuance'])!.value,
      profession: this.editForm.get(['profession'])!.value,
      personnalite: this.editForm.get(['personnalite'])!.value,
      sortant: this.editForm.get(['sortant'])!.value,
      sexeSupp: this.editForm.get(['sexeSupp'])!.value,
      nomSupp: this.editForm.get(['nomSupp'])!.value,
      prenomSupp: this.editForm.get(['prenomSupp'])!.value,
      dateNaissanceSupp: this.editForm.get(['dateNaissanceSupp'])!.value,
      isElu: this.editForm.get(['isElu'])!.value,
      candidatreconnu: this.editForm.get(['candidatreconnu'])!.value,
      suppleantreconnu: this.editForm.get(['suppleantreconnu'])!.value,
      elu: this.editForm.get(['elu'])!.value,
      csp: this.editForm.get(['csp'])!.value,
      dpt: this.editForm.get(['dpt'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICandidat>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
