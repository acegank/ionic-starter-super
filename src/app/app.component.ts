import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, IonicApp } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: '教程', component: 'TutorialPage' },
    { title: '欢迎', component: 'WelcomePage' },
    { title: '标签页面', component: 'TabsPage' },
    { title: '卡片', component: 'CardsPage' },
    { title: '内容', component: 'ContentPage' },
    { title: '登录', component: 'LoginPage' },
    { title: '注册', component: 'SignupPage' },
    { title: '母版详情', component: 'ListMasterPage' },
    { title: '菜单', component: 'MenuPage' },
    { title: '设置', component: 'SettingsPage' },
    { title: '搜索', component: 'SearchPage' }
  ]

  constructor(
    private translate: TranslateService,
    platform: Platform,
    settings: Settings,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private ionicApp: IonicApp, ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setupBrowserBackButtonBehavior();
    });
    this.initTranslate();
  }


  private setupBrowserBackButtonBehavior(): void {
    window.onpopstate = (event) => {
      if (this.ionicApp) {
        let activePortal: any =
          this.ionicApp._loadingPortal.getActive() ||
          this.ionicApp._modalPortal.getActive() ||
          this.ionicApp._toastPortal.getActive() ||
          this.ionicApp._overlayPortal.getActive();

        console.log('ss', this.ionicApp._modalPortal.getActive());
        if (activePortal) {
          activePortal.dismiss();
          // this.app.setTitle("your title");
          return;
        }
      }
    };
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('zh'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
