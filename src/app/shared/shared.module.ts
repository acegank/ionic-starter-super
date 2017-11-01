import { PageComponentModule } from './components/page/page.module';
import { SuperModalModule } from './components/modal/modal.module';
import { NgModule, ModuleWithProviders } from "@angular/core";
export { SuperModalModule } from './components/modal/modal.module';
export { SuperModalController } from './components/modal/modal';




@NgModule({
  imports: [
    SuperModalModule.forRoot(),
    PageComponentModule.forRoot(),
  ],
  providers: [

  ],
  declarations: [

  ],
  exports: [

  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
