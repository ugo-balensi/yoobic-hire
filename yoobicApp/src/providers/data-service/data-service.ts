import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { User } from '../../models/user';
import { Item } from '../../models/item';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient) {}

  getRandomUsers(): Observable<User[]>{
      return this.http.get<User[]>('assets/mocks/random_users.json');
  }

  getRandomItems(): Observable<Item[]>{
    return this.http.get<Item[]>('assets/mocks/random_items.json');
}

}
