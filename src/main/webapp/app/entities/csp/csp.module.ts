import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElectionvueSharedModule } from 'app/shared/shared.module';
import { CspComponent } from './csp.component';
import { CspDetailComponent } from './csp-detail.component';
import { CspUpdateComponent } from './csp-update.component';
import { CspDeleteDialogComponent } from './csp-delete-dialog.component';
import { cspRoute } from './csp.route';

@NgModule({
  imports: [ElectionvueSharedModule, RouterModule.forChild(cspRoute)],
  declarations: [CspComponent, CspDetailComponent, CspUpdateComponent, CspDeleteDialogComponent],
  entryComponents: [CspDeleteDialogComponent],
})
export class ElectionvueCspModule {}
