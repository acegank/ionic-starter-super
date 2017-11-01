import { MockProxy } from './proxy/mock-proxy/mock-proxy';
import { AjaxProxy } from './proxy/ajax/ajax';
import { HttpProxy } from './proxy/http-proxy/http-proxy';
import { TokenService } from './net/token/token.service';

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

export * from './mocks/providers/items';
export * from './models/item';
export { Settings } from './settings/settings';
export * from './proxy/mock-proxy/mock-proxy';
export * from './proxy/ajax/ajax';
export * from './proxy/http-proxy/http-proxy';
export * from './net/token/token.service';
export * from './providers/providers';


@NgModule({
  imports: [
  ],
  providers: [
    TokenService,
    HttpProxy,
    AjaxProxy,
    MockProxy
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
