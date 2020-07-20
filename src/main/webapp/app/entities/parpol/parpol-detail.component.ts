import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IParpol } from 'app/shared/model/parpol.model';

@Component({
  selector: 'jhi-parpol-detail',
  templateUrl: './parpol-detail.component.html',
})
export class ParpolDetailComponent implements OnInit {
  parpol: IParpol | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ parpol }) => (this.parpol = parpol));
  }

  previousState(): void {
    window.history.back();
  }
}
