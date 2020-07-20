import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IResultatDetaille } from 'app/shared/model/resultat-detaille.model';

@Component({
  selector: 'jhi-resultat-detaille-detail',
  templateUrl: './resultat-detaille-detail.component.html',
})
export class ResultatDetailleDetailComponent implements OnInit {
  resultatDetaille: IResultatDetaille | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ resultatDetaille }) => (this.resultatDetaille = resultatDetaille));
  }

  previousState(): void {
    window.history.back();
  }
}
