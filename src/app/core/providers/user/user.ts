import { AjaxProxy } from './../../proxy/ajax/ajax';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

@Injectable()
export class User {
  _user: any;

  constructor(public ajax: AjaxProxy) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {

    // let seq = this.ajax.proxy.post('login', accountInfo).share();
    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });
    // return seq;
    return this.ajax.signIn(accountInfo);
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.ajax.proxy.post('signup', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
