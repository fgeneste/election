import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICsp } from 'app/shared/model/csp.model';
import { CspService } from './csp.service';

@Component({
  templateUrl: './csp-delete-dialog.component.html',
})
export class CspDeleteDialogComponent {
  csp?: ICsp;

  constructor(protected cspService: CspService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.cspService.delete(id).subscribe(() => {
      this.eventManager.broadcast('cspListModification');
      this.activeModal.close();
    });
  }
}
