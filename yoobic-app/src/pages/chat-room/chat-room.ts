import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { Socket } from '../../../node_modules/ng-socket-io';
import { Observable } from '../../../node_modules/rxjs/Observable';

/**
 * Generated class for the ChatRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {

  currentUser: User;
  message: string = '';
  nickname: string = '';
  avatar: string = '';
  messages: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private socket: Socket) {

    this.currentUser = this.navParams.get('currentUser');
    this.nickname = this.currentUser.username;
    this.avatar = this.currentUser.avatar;
    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
  }

  ionViewDidLoad() {
    this.socket.connect();
    this.socket.emit('set-user', {
      username: this.currentUser.username,
      avatar: this.currentUser.avatar
    });
  }

  sendMessage(): void {
    this.socket.emit('add-message', { text: this.message });
    this.message = '';
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.sendMessage();
    }
  }

  getMessages(): Observable<any> {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  getUsers(): Observable<any> {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  showToast(msg): void {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
}


