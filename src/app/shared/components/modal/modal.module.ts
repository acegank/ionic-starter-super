import { HttpModule } from '@angular/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SuperModalController } from './modal';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    // SuperModalController
  ]
})
export class SuperModalModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SuperModalModule, providers: [SuperModalController]
    };
  }
}
