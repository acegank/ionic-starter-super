import { ModalController, ModalOptions } from 'ionic-angular';
import { Injectable } from "@angular/core";

@Injectable()
export class SuperModalController extends ModalController {

  open(name, data, onDismiss?) {
    history.pushState(null, null, "");
    let modal = this.create(name, data);
    if (onDismiss)
      modal.onDidDismiss(onDismiss);
    modal.present();
  }

}
