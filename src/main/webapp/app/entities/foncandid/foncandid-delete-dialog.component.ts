import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFoncandid } from 'app/shared/model/foncandid.model';
import { FoncandidService } from './foncandid.service';

@Component({
  templateUrl: './foncandid-delete-dialog.component.html',
})
export class FoncandidDeleteDialogComponent {
  foncandid?: IFoncandid;

  constructor(protected foncandidService: FoncandidService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.foncandidService.delete(id).subscribe(() => {
      this.eventManager.broadcast('foncandidListModification');
      this.activeModal.close();
    });
  }
}
