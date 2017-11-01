import { AjaxProxy } from './../../proxy/ajax/ajax';
import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
// import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public ajax: AjaxProxy) { }

  query(params?: any) {
    return this.ajax.proxy.get('/items', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
