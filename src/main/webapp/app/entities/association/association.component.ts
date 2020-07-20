import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IAssociation } from 'app/shared/model/association.model';
import { AssociationService } from './association.service';
import { AssociationDeleteDialogComponent } from './association-delete-dialog.component';

@Component({
  selector: 'jhi-association',
  templateUrl: './association.component.html',
})
export class AssociationComponent implements OnInit, OnDestroy {
  associations?: IAssociation[];
  eventSubscriber?: Subscription;

  constructor(
    protected associationService: AssociationService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.associationService.query().subscribe((res: HttpResponse<IAssociation[]>) => (this.associations = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInAssociations();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IAssociation): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInAssociations(): void {
    this.eventSubscriber = this.eventManager.subscribe('associationListModification', () => this.loadAll());
  }

  delete(association: IAssociation): void {
    const modalRef = this.modalService.open(AssociationDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.association = association;
  }
}
