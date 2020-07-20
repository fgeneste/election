import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IFichier, Fichier } from 'app/shared/model/fichier.model';
import { FichierService } from './fichier.service';

@Component({
  selector: 'jhi-fichier-update',
  templateUrl: './fichier-update.component.html',
})
export class FichierUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    filename: [null, []],
    path: [],
    type: [],
    traite: [],
    dateTraitement: [],
  });

  constructor(protected fichierService: FichierService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fichier }) => {
      if (!fichier.id) {
        const today = moment().startOf('day');
        fichier.dateTraitement = today;
      }

      this.updateForm(fichier);
    });
  }

  updateForm(fichier: IFichier): void {
    this.editForm.patchValue({
      id: fichier.id,
      filename: fichier.filename,
      path: fichier.path,
      type: fichier.type,
      traite: fichier.traite,
      dateTraitement: fichier.dateTraitement ? fichier.dateTraitement.format(DATE_TIME_FORMAT) : null,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const fichier = this.createFromForm();
    if (fichier.id !== undefined) {
      this.subscribeToSaveResponse(this.fichierService.update(fichier));
    } else {
      this.subscribeToSaveResponse(this.fichierService.create(fichier));
    }
  }

  private createFromForm(): IFichier {
    return {
      ...new Fichier(),
      id: this.editForm.get(['id'])!.value,
      filename: this.editForm.get(['filename'])!.value,
      path: this.editForm.get(['path'])!.value,
      type: this.editForm.get(['type'])!.value,
      traite: this.editForm.get(['traite'])!.value,
      dateTraitement: this.editForm.get(['dateTraitement'])!.value
        ? moment(this.editForm.get(['dateTraitement'])!.value, DATE_TIME_FORMAT)
        : undefined,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFichier>>): void {
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
