import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IResultatDetaille, ResultatDetaille } from 'app/shared/model/resultat-detaille.model';
import { ResultatDetailleService } from './resultat-detaille.service';
import { IResultat } from 'app/shared/model/resultat.model';
import { ResultatService } from 'app/entities/resultat/resultat.service';

@Component({
  selector: 'jhi-resultat-detaille-update',
  templateUrl: './resultat-detaille-update.component.html',
})
export class ResultatDetailleUpdateComponent implements OnInit {
  isSaving = false;
  resultats: IResultat[] = [];

  editForm = this.fb.group({
    id: [],
    noDepot: [],
    sexe: [],
    nom: [],
    prenom: [],
    nuance: [],
    resultatCandidat: [],
    nuanceListe: [],
    libelleListe: [],
    teteListe: [],
    voix: [],
    voixOnIns: [],
    voixOnExp: [],
    sieges: [],
    resultat: [],
  });

  constructor(
    protected resultatDetailleService: ResultatDetailleService,
    protected resultatService: ResultatService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ resultatDetaille }) => {
      this.updateForm(resultatDetaille);

      this.resultatService.query().subscribe((res: HttpResponse<IResultat[]>) => (this.resultats = res.body || []));
    });
  }

  updateForm(resultatDetaille: IResultatDetaille): void {
    this.editForm.patchValue({
      id: resultatDetaille.id,
      noDepot: resultatDetaille.noDepot,
      sexe: resultatDetaille.sexe,
      nom: resultatDetaille.nom,
      prenom: resultatDetaille.prenom,
      nuance: resultatDetaille.nuance,
      resultatCandidat: resultatDetaille.resultatCandidat,
      nuanceListe: resultatDetaille.nuanceListe,
      libelleListe: resultatDetaille.libelleListe,
      teteListe: resultatDetaille.teteListe,
      voix: resultatDetaille.voix,
      voixOnIns: resultatDetaille.voixOnIns,
      voixOnExp: resultatDetaille.voixOnExp,
      sieges: resultatDetaille.sieges,
      resultat: resultatDetaille.resultat,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const resultatDetaille = this.createFromForm();
    if (resultatDetaille.id !== undefined) {
      this.subscribeToSaveResponse(this.resultatDetailleService.update(resultatDetaille));
    } else {
      this.subscribeToSaveResponse(this.resultatDetailleService.create(resultatDetaille));
    }
  }

  private createFromForm(): IResultatDetaille {
    return {
      ...new ResultatDetaille(),
      id: this.editForm.get(['id'])!.value,
      noDepot: this.editForm.get(['noDepot'])!.value,
      sexe: this.editForm.get(['sexe'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      nuance: this.editForm.get(['nuance'])!.value,
      resultatCandidat: this.editForm.get(['resultatCandidat'])!.value,
      nuanceListe: this.editForm.get(['nuanceListe'])!.value,
      libelleListe: this.editForm.get(['libelleListe'])!.value,
      teteListe: this.editForm.get(['teteListe'])!.value,
      voix: this.editForm.get(['voix'])!.value,
      voixOnIns: this.editForm.get(['voixOnIns'])!.value,
      voixOnExp: this.editForm.get(['voixOnExp'])!.value,
      sieges: this.editForm.get(['sieges'])!.value,
      resultat: this.editForm.get(['resultat'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IResultatDetaille>>): void {
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

  trackById(index: number, item: IResultat): any {
    return item.id;
  }
}
