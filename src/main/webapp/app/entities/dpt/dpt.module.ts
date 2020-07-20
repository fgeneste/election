import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElectionvueSharedModule } from 'app/shared/shared.module';
import { DptComponent } from './dpt.component';
import { DptDetailComponent } from './dpt-detail.component';
import { DptUpdateComponent } from './dpt-update.component';
import { DptDeleteDialogComponent } from './dpt-delete-dialog.component';
import { dptRoute } from './dpt.route';

@NgModule({
  imports: [ElectionvueSharedModule, RouterModule.forChild(dptRoute)],
  declarations: [DptComponent, DptDetailComponent, DptUpdateComponent, DptDeleteDialogComponent],
  entryComponents: [DptDeleteDialogComponent],
})
export class ElectionvueDptModule {}
