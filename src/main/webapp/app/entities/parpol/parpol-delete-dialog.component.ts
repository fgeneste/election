import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IParpol } from 'app/shared/model/parpol.model';
import { ParpolService } from './parpol.service';

@Component({
  templateUrl: './parpol-delete-dialog.component.html',
})
export class ParpolDeleteDialogComponent {
  parpol?: IParpol;

  constructor(protected parpolService: ParpolService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.parpolService.delete(id).subscribe(() => {
      this.eventManager.broadcast('parpolListModification');
      this.activeModal.close();
    });
  }
}
