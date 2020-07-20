import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDpt } from 'app/shared/model/dpt.model';
import { DptService } from './dpt.service';

@Component({
  templateUrl: './dpt-delete-dialog.component.html',
})
export class DptDeleteDialogComponent {
  dpt?: IDpt;

  constructor(protected dptService: DptService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.dptService.delete(id).subscribe(() => {
      this.eventManager.broadcast('dptListModification');
      this.activeModal.close();
    });
  }
}
