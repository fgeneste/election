import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IElu } from 'app/shared/model/elu.model';
import { EluService } from './elu.service';
import { EluDeleteDialogComponent } from './elu-delete-dialog.component';

@Component({
  selector: 'jhi-elu',
  templateUrl: './elu.component.html',
})
export class EluComponent implements OnInit, OnDestroy {
  elus?: IElu[];
  eventSubscriber?: Subscription;

  constructor(protected eluService: EluService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.eluService.query().subscribe((res: HttpResponse<IElu[]>) => (this.elus = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInElus();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IElu): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInElus(): void {
    this.eventSubscriber = this.eventManager.subscribe('eluListModification', () => this.loadAll());
  }

  delete(elu: IElu): void {
    const modalRef = this.modalService.open(EluDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.elu = elu;
  }
}
