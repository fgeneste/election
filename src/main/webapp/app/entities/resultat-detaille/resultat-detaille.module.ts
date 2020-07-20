import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElectionvueSharedModule } from 'app/shared/shared.module';
import { ResultatDetailleComponent } from './resultat-detaille.component';
import { ResultatDetailleDetailComponent } from './resultat-detaille-detail.component';
import { ResultatDetailleUpdateComponent } from './resultat-detaille-update.component';
import { ResultatDetailleDeleteDialogComponent } from './resultat-detaille-delete-dialog.component';
import { resultatDetailleRoute } from './resultat-detaille.route';

@NgModule({
  imports: [ElectionvueSharedModule, RouterModule.forChild(resultatDetailleRoute)],
  declarations: [
    ResultatDetailleComponent,
    ResultatDetailleDetailComponent,
    ResultatDetailleUpdateComponent,
    ResultatDetailleDeleteDialogComponent,
  ],
  entryComponents: [ResultatDetailleDeleteDialogComponent],
})
export class ElectionvueResultatDetailleModule {}
