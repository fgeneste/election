import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IDpt, Dpt } from 'app/shared/model/dpt.model';
import { DptService } from './dpt.service';

@Component({
  selector: 'jhi-dpt-update',
  templateUrl: './dpt-update.component.html',
})
export class DptUpdateComponent implements OnInit {
  isSaving = false;
  dptdatdebDp: any;
  dptdatfinDp: any;
  syscredatDp: any;
  sysmajdatDp: any;

  editForm = this.fb.group({
    id: [],
    dptnum: [],
    dptcod: [],
    dptlib: [],
    dptnbrsen: [],
    dptmodscrsen: [],
    dptser: [],
    regcod: [],
    dptnumtri: [],
    dptcodsirpas: [],
    dptlic: [],
    dptart: [],
    dptlibtri: [],
    temvalcod: [],
    evelic: [],
    evelib: [],
    evelil: [],
    eveobs: [],
    dptser2004: [],
    dptcmt: [],
    dptcmtaff: [],
    dptdatdeb: [],
    dptdatfin: [],
    evetempub: [],
    dpturlcmp: [],
    dptminintcod: [],
    syscredat: [],
    syscrelog: [],
    sysmajdat: [],
    sysmajlog: [],
  });

  constructor(protected dptService: DptService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dpt }) => {
      this.updateForm(dpt);
    });
  }

  updateForm(dpt: IDpt): void {
    this.editForm.patchValue({
      id: dpt.id,
      dptnum: dpt.dptnum,
      dptcod: dpt.dptcod,
      dptlib: dpt.dptlib,
      dptnbrsen: dpt.dptnbrsen,
      dptmodscrsen: dpt.dptmodscrsen,
      dptser: dpt.dptser,
      regcod: dpt.regcod,
      dptnumtri: dpt.dptnumtri,
      dptcodsirpas: dpt.dptcodsirpas,
      dptlic: dpt.dptlic,
      dptart: dpt.dptart,
      dptlibtri: dpt.dptlibtri,
      temvalcod: dpt.temvalcod,
      evelic: dpt.evelic,
      evelib: dpt.evelib,
      evelil: dpt.evelil,
      eveobs: dpt.eveobs,
      dptser2004: dpt.dptser2004,
      dptcmt: dpt.dptcmt,
      dptcmtaff: dpt.dptcmtaff,
      dptdatdeb: dpt.dptdatdeb,
      dptdatfin: dpt.dptdatfin,
      evetempub: dpt.evetempub,
      dpturlcmp: dpt.dpturlcmp,
      dptminintcod: dpt.dptminintcod,
      syscredat: dpt.syscredat,
      syscrelog: dpt.syscrelog,
      sysmajdat: dpt.sysmajdat,
      sysmajlog: dpt.sysmajlog,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const dpt = this.createFromForm();
    if (dpt.id !== undefined) {
      this.subscribeToSaveResponse(this.dptService.update(dpt));
    } else {
      this.subscribeToSaveResponse(this.dptService.create(dpt));
    }
  }

  private createFromForm(): IDpt {
    return {
      ...new Dpt(),
      id: this.editForm.get(['id'])!.value,
      dptnum: this.editForm.get(['dptnum'])!.value,
      dptcod: this.editForm.get(['dptcod'])!.value,
      dptlib: this.editForm.get(['dptlib'])!.value,
      dptnbrsen: this.editForm.get(['dptnbrsen'])!.value,
      dptmodscrsen: this.editForm.get(['dptmodscrsen'])!.value,
      dptser: this.editForm.get(['dptser'])!.value,
      regcod: this.editForm.get(['regcod'])!.value,
      dptnumtri: this.editForm.get(['dptnumtri'])!.value,
      dptcodsirpas: this.editForm.get(['dptcodsirpas'])!.value,
      dptlic: this.editForm.get(['dptlic'])!.value,
      dptart: this.editForm.get(['dptart'])!.value,
      dptlibtri: this.editForm.get(['dptlibtri'])!.value,
      temvalcod: this.editForm.get(['temvalcod'])!.value,
      evelic: this.editForm.get(['evelic'])!.value,
      evelib: this.editForm.get(['evelib'])!.value,
      evelil: this.editForm.get(['evelil'])!.value,
      eveobs: this.editForm.get(['eveobs'])!.value,
      dptser2004: this.editForm.get(['dptser2004'])!.value,
      dptcmt: this.editForm.get(['dptcmt'])!.value,
      dptcmtaff: this.editForm.get(['dptcmtaff'])!.value,
      dptdatdeb: this.editForm.get(['dptdatdeb'])!.value,
      dptdatfin: this.editForm.get(['dptdatfin'])!.value,
      evetempub: this.editForm.get(['evetempub'])!.value,
      dpturlcmp: this.editForm.get(['dpturlcmp'])!.value,
      dptminintcod: this.editForm.get(['dptminintcod'])!.value,
      syscredat: this.editForm.get(['syscredat'])!.value,
      syscrelog: this.editForm.get(['syscrelog'])!.value,
      sysmajdat: this.editForm.get(['sysmajdat'])!.value,
      sysmajlog: this.editForm.get(['sysmajlog'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDpt>>): void {
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
