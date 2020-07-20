import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDpt } from 'app/shared/model/dpt.model';

@Component({
  selector: 'jhi-dpt-detail',
  templateUrl: './dpt-detail.component.html',
})
export class DptDetailComponent implements OnInit {
  dpt: IDpt | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dpt }) => (this.dpt = dpt));
  }

  previousState(): void {
    window.history.back();
  }
}
