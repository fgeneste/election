import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IParpol } from 'app/shared/model/parpol.model';
import { ParpolService } from './parpol.service';
import { ParpolDeleteDialogComponent } from './parpol-delete-dialog.component';

@Component({
  selector: 'jhi-parpol',
  templateUrl: './parpol.component.html',
})
export class ParpolComponent implements OnInit, OnDestroy {
  parpols?: IParpol[];
  eventSubscriber?: Subscription;

  constructor(protected parpolService: ParpolService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.parpolService.query().subscribe((res: HttpResponse<IParpol[]>) => (this.parpols = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInParpols();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IParpol): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInParpols(): void {
    this.eventSubscriber = this.eventManager.subscribe('parpolListModification', () => this.loadAll());
  }

  delete(parpol: IParpol): void {
    const modalRef = this.modalService.open(ParpolDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.parpol = parpol;
  }
}
