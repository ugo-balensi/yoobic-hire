import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { User } from '../../models/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User[];
  username: string;
  password: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public dataService: DataServiceProvider) {
  }

  ionViewDidLoad() {
  }

  login(): void {
    let logged: boolean = false;
    this.dataService.getRandomUsers().subscribe(data => {
      this.user = data;
      for (let i = 0; i < this.user.length; i++) {
        let validUsername = this.user[i]['username'];
        let validPassword = this.user[i]['password'];

        if (this.username === validUsername && this.password === validPassword) {
          this.navCtrl.push(MenuPage);
          sessionStorage.setItem('currentUser', JSON.stringify(this.user[i]))
          const toast = this.toastCtrl.create({
            message: 'Welcome ' + this.username,
            duration: 3000
          });
          toast.present();
          logged = true;
        }
      }
      if (!logged) {
        const alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: 'Wrong username or password',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }
}
