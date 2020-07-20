import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFichier } from 'app/shared/model/fichier.model';
import { FichierService } from './fichier.service';
import { FichierDeleteDialogComponent } from './fichier-delete-dialog.component';

@Component({
  selector: 'jhi-fichier',
  templateUrl: './fichier.component.html',
})
export class FichierComponent implements OnInit, OnDestroy {
  fichiers?: IFichier[];
  eventSubscriber?: Subscription;

  constructor(protected fichierService: FichierService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.fichierService.query().subscribe((res: HttpResponse<IFichier[]>) => (this.fichiers = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInFichiers();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IFichier): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInFichiers(): void {
    this.eventSubscriber = this.eventManager.subscribe('fichierListModification', () => this.loadAll());
  }

  delete(fichier: IFichier): void {
    const modalRef = this.modalService.open(FichierDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.fichier = fichier;
  }
}
