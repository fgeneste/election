import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElectionvueSharedModule } from 'app/shared/shared.module';
import { EluComponent } from './elu.component';
import { EluDetailComponent } from './elu-detail.component';
import { EluUpdateComponent } from './elu-update.component';
import { EluDeleteDialogComponent } from './elu-delete-dialog.component';
import { eluRoute } from './elu.route';

@NgModule({
  imports: [ElectionvueSharedModule, RouterModule.forChild(eluRoute)],
  declarations: [EluComponent, EluDetailComponent, EluUpdateComponent, EluDeleteDialogComponent],
  entryComponents: [EluDeleteDialogComponent],
})
export class ElectionvueEluModule {}
