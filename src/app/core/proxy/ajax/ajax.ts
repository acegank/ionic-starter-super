import { MockProxy } from './../mock-proxy/mock-proxy';
// tslint:disable:no-console class-name
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpProxy } from '../http-proxy/http-proxy';


export interface LoginModel {
  username: string;
  password: string;
  remembeMe?: boolean;
}

@Injectable()
export class AjaxProxy {

  constructor(public proxy: MockProxy) {

  }

  signIn(model: LoginModel) {
    return this.proxy.ajax({
      method: 'POST',
      url: 'api/login',
      mockJson: 'assets/data/profile.json',
      options: {
        body: model
      }
    });
  }

}
