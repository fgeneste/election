import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { ISen, Sen } from 'app/shared/model/sen.model';
import { SenService } from './sen.service';

@Component({
  selector: 'jhi-sen-update',
  templateUrl: './sen-update.component.html',
})
export class SenUpdateComponent implements OnInit {
  isSaving = false;
  sendatnaiDp: any;
  sendatdecDp: any;

  editForm = this.fb.group({
    id: [],
    senmat: [],
    quacod: [],
    sennomuse: [],
    sennompat: [],
    sennommar: [],
    sennomtec: [],
    senprenomuse: [],
    senprenomciv: [],
    sendatnai: [],
    senlienai: [],
    sendatdec: [],
    etasencod: [],
    sendespro: [],
    pcscod: [],
    catprocod: [],
    senrngprt: [],
    sengrppolcodcou: [],
    sengrppolliccou: [],
    sentypappcou: [],
    sencomcodcou: [],
    sencomliccou: [],
    sencirnumcou: [],
    sencircou: [],
    senburliccou: [],
    senema: [],
    sennumtelsen: [],
    sendiplome: [],
    sendecora: [],
    sendatpreele: [],
    indid: [],
    sennomusecap: [],
    senpagper: [],
    senrngprtcod: [],
    parpolorgcod: [],
    senliedec: [],
    sendptnumnai: [],
    sendptnumdec: [],
    senauttra: [],
    senlog: [],
    sencrinom: [],
    senfem: [],
    senautema: [],
    senautgrpsen: [],
    senautpagper: [],
    sennbrque: [],
    sennomdis: [],
    numsen: [],
    sennumsie: [],
    sennbrvid: [],
    sennomdit: [],
    titnobcod: [],
  });

  constructor(protected senService: SenService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sen }) => {
      if (!sen.id) {
        const today = moment().startOf('day');
        sen.sendatpreele = today;
      }

      this.updateForm(sen);
    });
  }

  updateForm(sen: ISen): void {
    this.editForm.patchValue({
      id: sen.id,
      senmat: sen.senmat,
      quacod: sen.quacod,
      sennomuse: sen.sennomuse,
      sennompat: sen.sennompat,
      sennommar: sen.sennommar,
      sennomtec: sen.sennomtec,
      senprenomuse: sen.senprenomuse,
      senprenomciv: sen.senprenomciv,
      sendatnai: sen.sendatnai,
      senlienai: sen.senlienai,
      sendatdec: sen.sendatdec,
      etasencod: sen.etasencod,
      sendespro: sen.sendespro,
      pcscod: sen.pcscod,
      catprocod: sen.catprocod,
      senrngprt: sen.senrngprt,
      sengrppolcodcou: sen.sengrppolcodcou,
      sengrppolliccou: sen.sengrppolliccou,
      sentypappcou: sen.sentypappcou,
      sencomcodcou: sen.sencomcodcou,
      sencomliccou: sen.sencomliccou,
      sencirnumcou: sen.sencirnumcou,
      sencircou: sen.sencircou,
      senburliccou: sen.senburliccou,
      senema: sen.senema,
      sennumtelsen: sen.sennumtelsen,
      sendiplome: sen.sendiplome,
      sendecora: sen.sendecora,
      sendatpreele: sen.sendatpreele ? sen.sendatpreele.format(DATE_TIME_FORMAT) : null,
      indid: sen.indid,
      sennomusecap: sen.sennomusecap,
      senpagper: sen.senpagper,
      senrngprtcod: sen.senrngprtcod,
      parpolorgcod: sen.parpolorgcod,
      senliedec: sen.senliedec,
      sendptnumnai: sen.sendptnumnai,
      sendptnumdec: sen.sendptnumdec,
      senauttra: sen.senauttra,
      senlog: sen.senlog,
      sencrinom: sen.sencrinom,
      senfem: sen.senfem,
      senautema: sen.senautema,
      senautgrpsen: sen.senautgrpsen,
      senautpagper: sen.senautpagper,
      sennbrque: sen.sennbrque,
      sennomdis: sen.sennomdis,
      numsen: sen.numsen,
      sennumsie: sen.sennumsie,
      sennbrvid: sen.sennbrvid,
      sennomdit: sen.sennomdit,
      titnobcod: sen.titnobcod,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const sen = this.createFromForm();
    if (sen.id !== undefined) {
      this.subscribeToSaveResponse(this.senService.update(sen));
    } else {
      this.subscribeToSaveResponse(this.senService.create(sen));
    }
  }

  private createFromForm(): ISen {
    return {
      ...new Sen(),
      id: this.editForm.get(['id'])!.value,
      senmat: this.editForm.get(['senmat'])!.value,
      quacod: this.editForm.get(['quacod'])!.value,
      sennomuse: this.editForm.get(['sennomuse'])!.value,
      sennompat: this.editForm.get(['sennompat'])!.value,
      sennommar: this.editForm.get(['sennommar'])!.value,
      sennomtec: this.editForm.get(['sennomtec'])!.value,
      senprenomuse: this.editForm.get(['senprenomuse'])!.value,
      senprenomciv: this.editForm.get(['senprenomciv'])!.value,
      sendatnai: this.editForm.get(['sendatnai'])!.value,
      senlienai: this.editForm.get(['senlienai'])!.value,
      sendatdec: this.editForm.get(['sendatdec'])!.value,
      etasencod: this.editForm.get(['etasencod'])!.value,
      sendespro: this.editForm.get(['sendespro'])!.value,
      pcscod: this.editForm.get(['pcscod'])!.value,
      catprocod: this.editForm.get(['catprocod'])!.value,
      senrngprt: this.editForm.get(['senrngprt'])!.value,
      sengrppolcodcou: this.editForm.get(['sengrppolcodcou'])!.value,
      sengrppolliccou: this.editForm.get(['sengrppolliccou'])!.value,
      sentypappcou: this.editForm.get(['sentypappcou'])!.value,
      sencomcodcou: this.editForm.get(['sencomcodcou'])!.value,
      sencomliccou: this.editForm.get(['sencomliccou'])!.value,
      sencirnumcou: this.editForm.get(['sencirnumcou'])!.value,
      sencircou: this.editForm.get(['sencircou'])!.value,
      senburliccou: this.editForm.get(['senburliccou'])!.value,
      senema: this.editForm.get(['senema'])!.value,
      sennumtelsen: this.editForm.get(['sennumtelsen'])!.value,
      sendiplome: this.editForm.get(['sendiplome'])!.value,
      sendecora: this.editForm.get(['sendecora'])!.value,
      sendatpreele: this.editForm.get(['sendatpreele'])!.value
        ? moment(this.editForm.get(['sendatpreele'])!.value, DATE_TIME_FORMAT)
        : undefined,
      indid: this.editForm.get(['indid'])!.value,
      sennomusecap: this.editForm.get(['sennomusecap'])!.value,
      senpagper: this.editForm.get(['senpagper'])!.value,
      senrngprtcod: this.editForm.get(['senrngprtcod'])!.value,
      parpolorgcod: this.editForm.get(['parpolorgcod'])!.value,
      senliedec: this.editForm.get(['senliedec'])!.value,
      sendptnumnai: this.editForm.get(['sendptnumnai'])!.value,
      sendptnumdec: this.editForm.get(['sendptnumdec'])!.value,
      senauttra: this.editForm.get(['senauttra'])!.value,
      senlog: this.editForm.get(['senlog'])!.value,
      sencrinom: this.editForm.get(['sencrinom'])!.value,
      senfem: this.editForm.get(['senfem'])!.value,
      senautema: this.editForm.get(['senautema'])!.value,
      senautgrpsen: this.editForm.get(['senautgrpsen'])!.value,
      senautpagper: this.editForm.get(['senautpagper'])!.value,
      sennbrque: this.editForm.get(['sennbrque'])!.value,
      sennomdis: this.editForm.get(['sennomdis'])!.value,
      numsen: this.editForm.get(['numsen'])!.value,
      sennumsie: this.editForm.get(['sennumsie'])!.value,
      sennbrvid: this.editForm.get(['sennbrvid'])!.value,
      sennomdit: this.editForm.get(['sennomdit'])!.value,
      titnobcod: this.editForm.get(['titnobcod'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISen>>): void {
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
