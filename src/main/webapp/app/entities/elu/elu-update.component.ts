import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IElu, Elu } from 'app/shared/model/elu.model';
import { EluService } from './elu.service';
import { ISen } from 'app/shared/model/sen.model';
import { SenService } from 'app/entities/sen/sen.service';
import { ICsp } from 'app/shared/model/csp.model';
import { CspService } from 'app/entities/csp/csp.service';
import { IDpt } from 'app/shared/model/dpt.model';
import { DptService } from 'app/entities/dpt/dpt.service';

type SelectableEntity = ISen | ICsp | IDpt;

@Component({
  selector: 'jhi-elu-update',
  templateUrl: './elu-update.component.html',
})
export class EluUpdateComponent implements OnInit {
  isSaving = false;
  elusens: ISen[] = [];
  suppleantsens: ISen[] = [];
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
    tourElection: [],
    elusen: [],
    suppleantsen: [],
    csp: [],
    dpt: [],
  });

  constructor(
    protected eluService: EluService,
    protected senService: SenService,
    protected cspService: CspService,
    protected dptService: DptService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ elu }) => {
      this.updateForm(elu);

      this.senService
        .query({ filter: 'elu-is-null' })
        .pipe(
          map((res: HttpResponse<ISen[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: ISen[]) => {
          if (!elu.elusen || !elu.elusen.id) {
            this.elusens = resBody;
          } else {
            this.senService
              .find(elu.elusen.id)
              .pipe(
                map((subRes: HttpResponse<ISen>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: ISen[]) => (this.elusens = concatRes));
          }
        });

      this.senService
        .query({ filter: 'elu-is-null' })
        .pipe(
          map((res: HttpResponse<ISen[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: ISen[]) => {
          if (!elu.suppleantsen || !elu.suppleantsen.id) {
            this.suppleantsens = resBody;
          } else {
            this.senService
              .find(elu.suppleantsen.id)
              .pipe(
                map((subRes: HttpResponse<ISen>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: ISen[]) => (this.suppleantsens = concatRes));
          }
        });

      this.cspService.query().subscribe((res: HttpResponse<ICsp[]>) => (this.csps = res.body || []));

      this.dptService.query().subscribe((res: HttpResponse<IDpt[]>) => (this.dpts = res.body || []));
    });
  }

  updateForm(elu: IElu): void {
    this.editForm.patchValue({
      id: elu.id,
      libelleDepartement: elu.libelleDepartement,
      numeroDepot: elu.numeroDepot,
      numeroDepotListe: elu.numeroDepotListe,
      libelleListe: elu.libelleListe,
      noOrdreListe: elu.noOrdreListe,
      sexe: elu.sexe,
      nom: elu.nom,
      prenom: elu.prenom,
      dateNaissance: elu.dateNaissance,
      nuance: elu.nuance,
      profession: elu.profession,
      personnalite: elu.personnalite,
      sortant: elu.sortant,
      sexeSupp: elu.sexeSupp,
      nomSupp: elu.nomSupp,
      prenomSupp: elu.prenomSupp,
      dateNaissanceSupp: elu.dateNaissanceSupp,
      tourElection: elu.tourElection,
      elusen: elu.elusen,
      suppleantsen: elu.suppleantsen,
      csp: elu.csp,
      dpt: elu.dpt,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const elu = this.createFromForm();
    if (elu.id !== undefined) {
      this.subscribeToSaveResponse(this.eluService.update(elu));
    } else {
      this.subscribeToSaveResponse(this.eluService.create(elu));
    }
  }

  private createFromForm(): IElu {
    return {
      ...new Elu(),
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
      tourElection: this.editForm.get(['tourElection'])!.value,
      elusen: this.editForm.get(['elusen'])!.value,
      suppleantsen: this.editForm.get(['suppleantsen'])!.value,
      csp: this.editForm.get(['csp'])!.value,
      dpt: this.editForm.get(['dpt'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IElu>>): void {
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
