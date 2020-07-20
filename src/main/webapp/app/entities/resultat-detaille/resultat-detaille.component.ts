import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IResultatDetaille } from 'app/shared/model/resultat-detaille.model';
import { ResultatDetailleService } from './resultat-detaille.service';
import { ResultatDetailleDeleteDialogComponent } from './resultat-detaille-delete-dialog.component';

@Component({
  selector: 'jhi-resultat-detaille',
  templateUrl: './resultat-detaille.component.html',
})
export class ResultatDetailleComponent implements OnInit, OnDestroy {
  resultatDetailles?: IResultatDetaille[];
  eventSubscriber?: Subscription;

  constructor(
    protected resultatDetailleService: ResultatDetailleService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.resultatDetailleService.query().subscribe((res: HttpResponse<IResultatDetaille[]>) => (this.resultatDetailles = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInResultatDetailles();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IResultatDetaille): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInResultatDetailles(): void {
    this.eventSubscriber = this.eventManager.subscribe('resultatDetailleListModification', () => this.loadAll());
  }

  delete(resultatDetaille: IResultatDetaille): void {
    const modalRef = this.modalService.open(ResultatDetailleDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.resultatDetaille = resultatDetaille;
  }
}
