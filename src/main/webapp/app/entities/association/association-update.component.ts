import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAssociation, Association } from 'app/shared/model/association.model';
import { AssociationService } from './association.service';
import { ICandidat } from 'app/shared/model/candidat.model';
import { CandidatService } from 'app/entities/candidat/candidat.service';
import { ISen } from 'app/shared/model/sen.model';
import { SenService } from 'app/entities/sen/sen.service';

type SelectableEntity = ICandidat | ISen;

@Component({
  selector: 'jhi-association-update',
  templateUrl: './association-update.component.html',
})
export class AssociationUpdateComponent implements OnInit {
  isSaving = false;
  candidats: ICandidat[] = [];
  sens: ISen[] = [];

  editForm = this.fb.group({
    id: [],
    score: [],
    candidat: [],
    sen: [],
  });

  constructor(
    protected associationService: AssociationService,
    protected candidatService: CandidatService,
    protected senService: SenService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ association }) => {
      this.updateForm(association);

      this.candidatService
        .query({ filter: 'association-is-null' })
        .pipe(
          map((res: HttpResponse<ICandidat[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: ICandidat[]) => {
          if (!association.candidat || !association.candidat.id) {
            this.candidats = resBody;
          } else {
            this.candidatService
              .find(association.candidat.id)
              .pipe(
                map((subRes: HttpResponse<ICandidat>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: ICandidat[]) => (this.candidats = concatRes));
          }
        });

      this.senService
        .query({ filter: 'association-is-null' })
        .pipe(
          map((res: HttpResponse<ISen[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: ISen[]) => {
          if (!association.sen || !association.sen.id) {
            this.sens = resBody;
          } else {
            this.senService
              .find(association.sen.id)
              .pipe(
                map((subRes: HttpResponse<ISen>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: ISen[]) => (this.sens = concatRes));
          }
        });
    });
  }

  updateForm(association: IAssociation): void {
    this.editForm.patchValue({
      id: association.id,
      score: association.score,
      candidat: association.candidat,
      sen: association.sen,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const association = this.createFromForm();
    if (association.id !== undefined) {
      this.subscribeToSaveResponse(this.associationService.update(association));
    } else {
      this.subscribeToSaveResponse(this.associationService.create(association));
    }
  }

  private createFromForm(): IAssociation {
    return {
      ...new Association(),
      id: this.editForm.get(['id'])!.value,
      score: this.editForm.get(['score'])!.value,
      candidat: this.editForm.get(['candidat'])!.value,
      sen: this.editForm.get(['sen'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAssociation>>): void {
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
