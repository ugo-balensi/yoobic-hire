import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, AlertController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ChatRoomPage } from '../pages/chat-room/chat-room';
import { User } from '../models/user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;
  currentUser: User;

  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
 
  }

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    public events: Events,
    public menu: MenuController,
    public alertCtrl: AlertController,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  ngOnInit() {
    this.events.subscribe('currentUser', (user) => {
      console.log('user : ', user);
      this.currentUser = user;
    });
  }

  logout(): void {

    const confirm = this.alertCtrl.create({
      title: 'Information',
      message: 'Confirm to log out ?',
      buttons: [
        {
          text: 'Back',
          handler: () => {
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.nav.push(LoginPage);
            this.menu.close();
          }
        }
      ]
    });
    confirm.present();

  }

  goToDashboard(): void {
    this.nav.push(DashboardPage);
    this.menu.close();
  }

  goToChatRoom(currentUser: User): void {
    this.nav.push(ChatRoomPage, {
      currentUser: currentUser
    });
    this.menu.close();
  }

}

