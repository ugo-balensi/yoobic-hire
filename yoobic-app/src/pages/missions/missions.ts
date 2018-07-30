import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Item } from '../../models/item';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the MissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-missions',
  templateUrl: 'missions.html',
})
export class MissionsPage {

  items: Item[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: DataServiceProvider) {
  }

  ionViewDidLoad() {
    this.dataService.getRandomItems().subscribe(data => {
      this.items = data;
    })
  }

  goToDetails(item: Item): void {
    this.navCtrl.push(DetailsPage, {
      item: item
    })
  }

}
