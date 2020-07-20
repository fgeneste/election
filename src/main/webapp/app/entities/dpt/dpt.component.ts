import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IDpt } from 'app/shared/model/dpt.model';
import { DptService } from './dpt.service';
import { DptDeleteDialogComponent } from './dpt-delete-dialog.component';

@Component({
  selector: 'jhi-dpt',
  templateUrl: './dpt.component.html',
})
export class DptComponent implements OnInit, OnDestroy {
  dpts?: IDpt[];
  eventSubscriber?: Subscription;

  constructor(protected dptService: DptService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.dptService.query().subscribe((res: HttpResponse<IDpt[]>) => (this.dpts = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInDpts();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IDpt): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInDpts(): void {
    this.eventSubscriber = this.eventManager.subscribe('dptListModification', () => this.loadAll());
  }

  delete(dpt: IDpt): void {
    const modalRef = this.modalService.open(DptDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.dpt = dpt;
  }
}
