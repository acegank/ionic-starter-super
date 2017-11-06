import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TreePage } from './tree';
import { TreeModule } from 'ng2-tree';

@NgModule({
  declarations: [
    TreePage,
  ],
  imports: [
    IonicPageModule.forChild(TreePage),
    TranslateModule.forChild(),
    TreeModule
  ],
  exports: [
    TreePage
  ]
})
export class TreePageModule { }
