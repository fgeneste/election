import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IParpol, Parpol } from 'app/shared/model/parpol.model';
import { ParpolService } from './parpol.service';

@Component({
  selector: 'jhi-parpol-update',
  templateUrl: './parpol-update.component.html',
})
export class ParpolUpdateComponent implements OnInit {
  isSaving = false;
  orgdatfinDp: any;
  syscredatDp: any;
  sysmajdatDp: any;
  orgdatcreDp: any;

  editForm = this.fb.group({
    id: [],
    tenpolcod: [],
    orgcod: [],
    typparpolcod: [],
    typorgcod: [],
    eveobs: [],
    orgart: [],
    orgnumtri: [],
    orgdatfin: [],
    orgnumtie: [],
    orgurlsim: [],
    orgurlcmp: [],
    orgtemannu: [],
    evetempub: [],
    syscredat: [],
    syscrelog: [],
    sysmajdat: [],
    sysmajlog: [],
    evelil: [],
    evelib: [],
    evelic: [],
    temvalcod: [],
    orgdatcre: [],
  });

  constructor(protected parpolService: ParpolService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ parpol }) => {
      this.updateForm(parpol);
    });
  }

  updateForm(parpol: IParpol): void {
    this.editForm.patchValue({
      id: parpol.id,
      tenpolcod: parpol.tenpolcod,
      orgcod: parpol.orgcod,
      typparpolcod: parpol.typparpolcod,
      typorgcod: parpol.typorgcod,
      eveobs: parpol.eveobs,
      orgart: parpol.orgart,
      orgnumtri: parpol.orgnumtri,
      orgdatfin: parpol.orgdatfin,
      orgnumtie: parpol.orgnumtie,
      orgurlsim: parpol.orgurlsim,
      orgurlcmp: parpol.orgurlcmp,
      orgtemannu: parpol.orgtemannu,
      evetempub: parpol.evetempub,
      syscredat: parpol.syscredat,
      syscrelog: parpol.syscrelog,
      sysmajdat: parpol.sysmajdat,
      sysmajlog: parpol.sysmajlog,
      evelil: parpol.evelil,
      evelib: parpol.evelib,
      evelic: parpol.evelic,
      temvalcod: parpol.temvalcod,
      orgdatcre: parpol.orgdatcre,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const parpol = this.createFromForm();
    if (parpol.id !== undefined) {
      this.subscribeToSaveResponse(this.parpolService.update(parpol));
    } else {
      this.subscribeToSaveResponse(this.parpolService.create(parpol));
    }
  }

  private createFromForm(): IParpol {
    return {
      ...new Parpol(),
      id: this.editForm.get(['id'])!.value,
      tenpolcod: this.editForm.get(['tenpolcod'])!.value,
      orgcod: this.editForm.get(['orgcod'])!.value,
      typparpolcod: this.editForm.get(['typparpolcod'])!.value,
      typorgcod: this.editForm.get(['typorgcod'])!.value,
      eveobs: this.editForm.get(['eveobs'])!.value,
      orgart: this.editForm.get(['orgart'])!.value,
      orgnumtri: this.editForm.get(['orgnumtri'])!.value,
      orgdatfin: this.editForm.get(['orgdatfin'])!.value,
      orgnumtie: this.editForm.get(['orgnumtie'])!.value,
      orgurlsim: this.editForm.get(['orgurlsim'])!.value,
      orgurlcmp: this.editForm.get(['orgurlcmp'])!.value,
      orgtemannu: this.editForm.get(['orgtemannu'])!.value,
      evetempub: this.editForm.get(['evetempub'])!.value,
      syscredat: this.editForm.get(['syscredat'])!.value,
      syscrelog: this.editForm.get(['syscrelog'])!.value,
      sysmajdat: this.editForm.get(['sysmajdat'])!.value,
      sysmajlog: this.editForm.get(['sysmajlog'])!.value,
      evelil: this.editForm.get(['evelil'])!.value,
      evelib: this.editForm.get(['evelib'])!.value,
      evelic: this.editForm.get(['evelic'])!.value,
      temvalcod: this.editForm.get(['temvalcod'])!.value,
      orgdatcre: this.editForm.get(['orgdatcre'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IParpol>>): void {
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
