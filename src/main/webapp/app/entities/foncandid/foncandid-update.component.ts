import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IFoncandid, Foncandid } from 'app/shared/model/foncandid.model';
import { FoncandidService } from './foncandid.service';

@Component({
  selector: 'jhi-foncandid-update',
  templateUrl: './foncandid-update.component.html',
})
export class FoncandidUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    foncandidcod: [],
    foncandidlibfem: [],
    foncandidlib: [],
    foncandidlic: [],
    foncandidlicfem: [],
  });

  constructor(protected foncandidService: FoncandidService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ foncandid }) => {
      this.updateForm(foncandid);
    });
  }

  updateForm(foncandid: IFoncandid): void {
    this.editForm.patchValue({
      id: foncandid.id,
      foncandidcod: foncandid.foncandidcod,
      foncandidlibfem: foncandid.foncandidlibfem,
      foncandidlib: foncandid.foncandidlib,
      foncandidlic: foncandid.foncandidlic,
      foncandidlicfem: foncandid.foncandidlicfem,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const foncandid = this.createFromForm();
    if (foncandid.id !== undefined) {
      this.subscribeToSaveResponse(this.foncandidService.update(foncandid));
    } else {
      this.subscribeToSaveResponse(this.foncandidService.create(foncandid));
    }
  }

  private createFromForm(): IFoncandid {
    return {
      ...new Foncandid(),
      id: this.editForm.get(['id'])!.value,
      foncandidcod: this.editForm.get(['foncandidcod'])!.value,
      foncandidlibfem: this.editForm.get(['foncandidlibfem'])!.value,
      foncandidlib: this.editForm.get(['foncandidlib'])!.value,
      foncandidlic: this.editForm.get(['foncandidlic'])!.value,
      foncandidlicfem: this.editForm.get(['foncandidlicfem'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFoncandid>>): void {
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
