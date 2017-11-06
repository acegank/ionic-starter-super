import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TreeModule } from 'ng2-tree';
import { TreeDialogPage } from './tree.dialog';

@NgModule({
  declarations: [
    TreeDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(TreeDialogPage),
    TranslateModule.forChild(),
    TreeModule
  ],
  exports: [
    TreeDialogPage,
  ]
})
export class TreePageModule { }
