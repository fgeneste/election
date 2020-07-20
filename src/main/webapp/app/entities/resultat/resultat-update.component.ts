import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IResultat, Resultat } from 'app/shared/model/resultat.model';
import { ResultatService } from './resultat.service';

@Component({
  selector: 'jhi-resultat-update',
  templateUrl: './resultat-update.component.html',
})
export class ResultatUpdateComponent implements OnInit {
  isSaving = false;
  dateExportDp: any;

  editForm = this.fb.group({
    id: [],
    dateExport: [],
    numeroDepartement: [],
    libelleDepartement: [],
    noTour: [],
    inscrits: [],
    abstentions: [],
    absOnIns: [],
    votants: [],
    votOnIns: [],
    blancs: [],
    blancsOnIns: [],
    blancsOnVot: [],
    nuls: [],
    nulsOnIns: [],
    nulsOnVot: [],
    exprime: [],
    expOnIns: [],
    expOnVot: [],
  });

  constructor(protected resultatService: ResultatService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ resultat }) => {
      this.updateForm(resultat);
    });
  }

  updateForm(resultat: IResultat): void {
    this.editForm.patchValue({
      id: resultat.id,
      dateExport: resultat.dateExport,
      numeroDepartement: resultat.numeroDepartement,
      libelleDepartement: resultat.libelleDepartement,
      noTour: resultat.noTour,
      inscrits: resultat.inscrits,
      abstentions: resultat.abstentions,
      absOnIns: resultat.absOnIns,
      votants: resultat.votants,
      votOnIns: resultat.votOnIns,
      blancs: resultat.blancs,
      blancsOnIns: resultat.blancsOnIns,
      blancsOnVot: resultat.blancsOnVot,
      nuls: resultat.nuls,
      nulsOnIns: resultat.nulsOnIns,
      nulsOnVot: resultat.nulsOnVot,
      exprime: resultat.exprime,
      expOnIns: resultat.expOnIns,
      expOnVot: resultat.expOnVot,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const resultat = this.createFromForm();
    if (resultat.id !== undefined) {
      this.subscribeToSaveResponse(this.resultatService.update(resultat));
    } else {
      this.subscribeToSaveResponse(this.resultatService.create(resultat));
    }
  }

  private createFromForm(): IResultat {
    return {
      ...new Resultat(),
      id: this.editForm.get(['id'])!.value,
      dateExport: this.editForm.get(['dateExport'])!.value,
      numeroDepartement: this.editForm.get(['numeroDepartement'])!.value,
      libelleDepartement: this.editForm.get(['libelleDepartement'])!.value,
      noTour: this.editForm.get(['noTour'])!.value,
      inscrits: this.editForm.get(['inscrits'])!.value,
      abstentions: this.editForm.get(['abstentions'])!.value,
      absOnIns: this.editForm.get(['absOnIns'])!.value,
      votants: this.editForm.get(['votants'])!.value,
      votOnIns: this.editForm.get(['votOnIns'])!.value,
      blancs: this.editForm.get(['blancs'])!.value,
      blancsOnIns: this.editForm.get(['blancsOnIns'])!.value,
      blancsOnVot: this.editForm.get(['blancsOnVot'])!.value,
      nuls: this.editForm.get(['nuls'])!.value,
      nulsOnIns: this.editForm.get(['nulsOnIns'])!.value,
      nulsOnVot: this.editForm.get(['nulsOnVot'])!.value,
      exprime: this.editForm.get(['exprime'])!.value,
      expOnIns: this.editForm.get(['expOnIns'])!.value,
      expOnVot: this.editForm.get(['expOnVot'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IResultat>>): void {
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
}
