import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElectionvueSharedModule } from 'app/shared/shared.module';
import { SenComponent } from './sen.component';
import { SenDetailComponent } from './sen-detail.component';
import { SenUpdateComponent } from './sen-update.component';
import { SenDeleteDialogComponent } from './sen-delete-dialog.component';
import { senRoute } from './sen.route';

@NgModule({
  imports: [ElectionvueSharedModule, RouterModule.forChild(senRoute)],
  declarations: [SenComponent, SenDetailComponent, SenUpdateComponent, SenDeleteDialogComponent],
  entryComponents: [SenDeleteDialogComponent],
})
export class ElectionvueSenModule {}
