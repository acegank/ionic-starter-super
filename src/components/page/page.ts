import { HttpClient } from '@angular/common/http';
import { Component, NgZone, ViewChild } from '@angular/core';
import { App, Platform, ViewController, ModalController, NavController, NavParams, ToastController, AlertController, LoadingController, Events, Content } from "ionic-angular";
import { FormBuilder } from "@angular/forms";
import { Location } from '@angular/common';
import { Http } from '@angular/http';

@Component({
  selector: 'page',
  template: '<div>This is a virtual base page.</div>'
})
export class Page {

  @ViewChild(Content) content: Content;
  submitting = false;
  submitted = false;
  loading;
  text: string;
  constructor(
    public app: App,
    public platform: Platform,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public location: Location,
    public event: Events,
    public zone: NgZone,
    public client: HttpClient,
    public alertCtrl: AlertController
  ) {
    // this.registerErrorEvents();
    // console.log('codes', codes);

    // http.get().toPromise();
    // client.get().toPromise();
  }

  ionViewDidLoad() {
    setTimeout(() => {
      if (this.content) {
        this.content.ionScrollEnd.subscribe(() => {
          let scrollEle = this.content.getScrollElement();
          if (scrollEle) {
            let y = scrollEle.scrollHeight - scrollEle.clientHeight;
            if (scrollEle.scrollTop >= y) {
              this.content.scrollTo(scrollEle.scrollLeft, y - 1);
              // console.log('sss.');
            }
          }
        });
      }
    }, 300);
  }

  getAjaxErrorHandle() {
    return (error) => {
      this.submitting = false;
      // error handling
    };
  }

  showErrorMessage(error: {
    code: string,
    params: string[],
    path: string,
    message: string,
    schemaId?: string
  }) {

    let params = error.params;
    let errorMessage = "";

    let idx = params.length;;
    while (idx--) {
      var whatIs = this.whatIs(params[idx]);
      var param = (whatIs === "object" || whatIs === "null") ? JSON.stringify(params[idx]) : params[idx];
      errorMessage = errorMessage.replace("{" + idx + "}", param);
    }
    this.showToastMessage(errorMessage);
  }

  whatIs = function (what) {

    var to = typeof what;
    if (to === "object") {
      if (what === null) {
        return "null";
      }
      if (Array.isArray(what)) {
        return "array";
      }
      return "object"; // typeof what === 'object' && what === Object(what) && !Array.isArray(what);
    }

    if (to === "number") {
      if (Number.isFinite(what)) {
        if (what % 1 === 0) {
          return "integer";
        } else {
          return "number";
        }
      }
      if (Number.isNaN(what)) {
        return "not-a-number";
      }
      return "unknown-number";
    }

    return to; // undefined, boolean, string, function
  };


  /**
   * 打开模式窗口
   *
   * @param {any} name  页面名字
   * @param {any} data  传递的参数数据
   * @param {any} [onDismiss]  关闭回调
   * @memberof Page
   */
  openModal(name, data, onDismiss?) {
    // history.pushState(null, null, "");
    let modal = this.modalCtrl.create(name, data);
    if (onDismiss)
      modal.onDidDismiss(onDismiss);
    modal.present();
  }

  /**
   * 销毁页面
   *
   * @param {*} [data]  销毁页面时传递的数据
   * @memberof Page
   */
  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }


  /**
   * 提示消息
   *
   * @param {any} message  消息内容
   * @param {string} [position]  位置
   * @memberof Page
   */
  showToastMessage(message, position?: string) {
    let toast = this.toastCtrl.create({
      position: position || "middle",
      message: message,
      duration: 3000
    });
    toast.present();
  }

  /**
   * 显示加载
   *
   * @param {any} message 加载消息提示
   * @memberof Page
   */
  showLoading(message) {
    this.loading = this.loadingCtrl.create({
      content: message,
    })
    this.loading.present();

  }

  /**
   * 销毁加载提示
   *
   * @memberof Page
   */
  dissmisAllLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading.dismissAll();
    }

  }

  /**
   * 提示信息窗
   *
   * @param {string} title
   * @param {string} message
   * @param {Function} [callback]
   * @memberof Page
   */
  showAlterMessage(title: string, message: string, callback?: Function) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: '确定',
          handler: () => {
            callback();
          }
        }]
    });
    alert.present();
  }

}
