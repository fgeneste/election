import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISen } from 'app/shared/model/sen.model';
import { SenService } from './sen.service';

@Component({
  templateUrl: './sen-delete-dialog.component.html',
})
export class SenDeleteDialogComponent {
  sen?: ISen;

  constructor(protected senService: SenService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.senService.delete(id).subscribe(() => {
      this.eventManager.broadcast('senListModification');
      this.activeModal.close();
    });
  }
}
