import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'candidat',
        loadChildren: () => import('./candidat/candidat.module').then(m => m.ElectionvueCandidatModule),
      },
      {
        path: 'fichier',
        loadChildren: () => import('./fichier/fichier.module').then(m => m.ElectionvueFichierModule),
      },
      {
        path: 'csp',
        loadChildren: () => import('./csp/csp.module').then(m => m.ElectionvueCspModule),
      },
      {
        path: 'dpt',
        loadChildren: () => import('./dpt/dpt.module').then(m => m.ElectionvueDptModule),
      },
      {
        path: 'elu',
        loadChildren: () => import('./elu/elu.module').then(m => m.ElectionvueEluModule),
      },
      {
        path: 'sen',
        loadChildren: () => import('./sen/sen.module').then(m => m.ElectionvueSenModule),
      },
      {
        path: 'resultat',
        loadChildren: () => import('./resultat/resultat.module').then(m => m.ElectionvueResultatModule),
      },
      {
        path: 'resultat-detaille',
        loadChildren: () => import('./resultat-detaille/resultat-detaille.module').then(m => m.ElectionvueResultatDetailleModule),
      },
      {
        path: 'parpol',
        loadChildren: () => import('./parpol/parpol.module').then(m => m.ElectionvueParpolModule),
      },
      {
        path: 'foncandid',
        loadChildren: () => import('./foncandid/foncandid.module').then(m => m.ElectionvueFoncandidModule),
      },
      {
        path: 'association',
        loadChildren: () => import('./association/association.module').then(m => m.ElectionvueAssociationModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class ElectionvueEntityModule {}
