import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFoncandid } from 'app/shared/model/foncandid.model';

@Component({
  selector: 'jhi-foncandid-detail',
  templateUrl: './foncandid-detail.component.html',
})
export class FoncandidDetailComponent implements OnInit {
  foncandid: IFoncandid | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ foncandid }) => (this.foncandid = foncandid));
  }

  previousState(): void {
    window.history.back();
  }
}
