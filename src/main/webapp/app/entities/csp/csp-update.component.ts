import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICsp, Csp } from 'app/shared/model/csp.model';
import { CspService } from './csp.service';

@Component({
  selector: 'jhi-csp-update',
  templateUrl: './csp-update.component.html',
})
export class CspUpdateComponent implements OnInit {
  isSaving = false;
  syscredatDp: any;
  sysmajdatDp: any;

  editForm = this.fb.group({
    id: [],
    cspcod: [null, [Validators.required]],
    catprocod: [],
    cspfamcod: [],
    csplib: [],
    cspnumtri: [],
    syscredat: [],
    syscrelog: [],
    sysmajdat: [],
    sysmajlog: [],
  });

  constructor(protected cspService: CspService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ csp }) => {
      this.updateForm(csp);
    });
  }

  updateForm(csp: ICsp): void {
    this.editForm.patchValue({
      id: csp.id,
      cspcod: csp.cspcod,
      catprocod: csp.catprocod,
      cspfamcod: csp.cspfamcod,
      csplib: csp.csplib,
      cspnumtri: csp.cspnumtri,
      syscredat: csp.syscredat,
      syscrelog: csp.syscrelog,
      sysmajdat: csp.sysmajdat,
      sysmajlog: csp.sysmajlog,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const csp = this.createFromForm();
    if (csp.id !== undefined) {
      this.subscribeToSaveResponse(this.cspService.update(csp));
    } else {
      this.subscribeToSaveResponse(this.cspService.create(csp));
    }
  }

  private createFromForm(): ICsp {
    return {
      ...new Csp(),
      id: this.editForm.get(['id'])!.value,
      cspcod: this.editForm.get(['cspcod'])!.value,
      catprocod: this.editForm.get(['catprocod'])!.value,
      cspfamcod: this.editForm.get(['cspfamcod'])!.value,
      csplib: this.editForm.get(['csplib'])!.value,
      cspnumtri: this.editForm.get(['cspnumtri'])!.value,
      syscredat: this.editForm.get(['syscredat'])!.value,
      syscrelog: this.editForm.get(['syscrelog'])!.value,
      sysmajdat: this.editForm.get(['sysmajdat'])!.value,
      sysmajlog: this.editForm.get(['sysmajlog'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICsp>>): void {
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
