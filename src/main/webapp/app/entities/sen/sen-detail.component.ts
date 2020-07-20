import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISen } from 'app/shared/model/sen.model';

@Component({
  selector: 'jhi-sen-detail',
  templateUrl: './sen-detail.component.html',
})
export class SenDetailComponent implements OnInit {
  sen: ISen | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sen }) => (this.sen = sen));
  }

  previousState(): void {
    window.history.back();
  }
}
