import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElectionvueSharedModule } from 'app/shared/shared.module';
import { ParpolComponent } from './parpol.component';
import { ParpolDetailComponent } from './parpol-detail.component';
import { ParpolUpdateComponent } from './parpol-update.component';
import { ParpolDeleteDialogComponent } from './parpol-delete-dialog.component';
import { parpolRoute } from './parpol.route';

@NgModule({
  imports: [ElectionvueSharedModule, RouterModule.forChild(parpolRoute)],
  declarations: [ParpolComponent, ParpolDetailComponent, ParpolUpdateComponent, ParpolDeleteDialogComponent],
  entryComponents: [ParpolDeleteDialogComponent],
})
export class ElectionvueParpolModule {}
