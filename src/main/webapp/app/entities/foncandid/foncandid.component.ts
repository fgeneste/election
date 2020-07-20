import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFoncandid } from 'app/shared/model/foncandid.model';
import { FoncandidService } from './foncandid.service';
import { FoncandidDeleteDialogComponent } from './foncandid-delete-dialog.component';

@Component({
  selector: 'jhi-foncandid',
  templateUrl: './foncandid.component.html',
})
export class FoncandidComponent implements OnInit, OnDestroy {
  foncandids?: IFoncandid[];
  eventSubscriber?: Subscription;

  constructor(protected foncandidService: FoncandidService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.foncandidService.query().subscribe((res: HttpResponse<IFoncandid[]>) => (this.foncandids = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInFoncandids();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IFoncandid): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInFoncandids(): void {
    this.eventSubscriber = this.eventManager.subscribe('foncandidListModification', () => this.loadAll());
  }

  delete(foncandid: IFoncandid): void {
    const modalRef = this.modalService.open(FoncandidDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.foncandid = foncandid;
  }
}
