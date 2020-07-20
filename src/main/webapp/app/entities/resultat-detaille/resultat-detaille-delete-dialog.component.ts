import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IResultatDetaille } from 'app/shared/model/resultat-detaille.model';
import { ResultatDetailleService } from './resultat-detaille.service';

@Component({
  templateUrl: './resultat-detaille-delete-dialog.component.html',
})
export class ResultatDetailleDeleteDialogComponent {
  resultatDetaille?: IResultatDetaille;

  constructor(
    protected resultatDetailleService: ResultatDetailleService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.resultatDetailleService.delete(id).subscribe(() => {
      this.eventManager.broadcast('resultatDetailleListModification');
      this.activeModal.close();
    });
  }
}
