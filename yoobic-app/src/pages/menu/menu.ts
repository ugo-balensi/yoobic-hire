import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  currentUser: User;

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
