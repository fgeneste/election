import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElectionvueSharedModule } from 'app/shared/shared.module';
import { FoncandidComponent } from './foncandid.component';
import { FoncandidDetailComponent } from './foncandid-detail.component';
import { FoncandidUpdateComponent } from './foncandid-update.component';
import { FoncandidDeleteDialogComponent } from './foncandid-delete-dialog.component';
import { foncandidRoute } from './foncandid.route';

@NgModule({
  imports: [ElectionvueSharedModule, RouterModule.forChild(foncandidRoute)],
  declarations: [FoncandidComponent, FoncandidDetailComponent, FoncandidUpdateComponent, FoncandidDeleteDialogComponent],
  entryComponents: [FoncandidDeleteDialogComponent],
})
export class ElectionvueFoncandidModule {}
