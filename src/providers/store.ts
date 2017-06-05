import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import currentWeekNumber from 'current-week-number';

import { State } from './state';

@Injectable()
export class Store {
  private date: Date = new Date();
  public today: string;
  private api: string = 'https://db.nca.edu.ni/api/api_ewapp.php'
  private keys: IKey[];

  constructor(
    private http: Http,
    private storage: Storage,
    public state: State,
    private events: Events
  ){
    console.log('new Store()');
    let month = ('0' + ( this.date.getMonth() + 1 ).toString() ).slice(-2);
    let day = ('0' + this.date.getDate().toString() ).slice(-2);
    let year = this.date.getFullYear().toString();
    this.today = `${year}-${month}-${day}`;
    this.keys = this.state.keys;
  }
  private fromApi( el: IKey, modifier: Function, oldData?: any ): Promise<any> {
    let url = this.buildUrl( el.url, el.query, el.queryParams );
    return this.http.get(url)
      .toPromise()
      .then( res => res.text() )
      .then( text => {
        try {
          let json = JSON.parse(text);
          return json;
        } catch(e) {
          return text;
        }
      })
      .then( newData => {
        let modifiedData = !modifier ? newData : modifier({
          newData,
          oldData
        });
        this.state.set(el.key, {
          date: this.date,
          data: modifiedData
        });
        return modifiedData;
      })
      .catch( err => {
        console.warn(err);
        return oldData;
      });
  }

  public async get( key: string, modifier?: Function ): Promise<any> {
    try {
      if( key === 'USER' ){ return this.getUser(); }

      // from the state
      let storeItem = this.state.get(key);

      let keyItem = this.keys.find( el => el.key === key );

      // not in memory, not in storage, from api
      if( !storeItem ){
        console.log('not in state... fetching ', key);
        return this.fromApi( keyItem, modifier );
      }

      let comparator: boolean;
      switch( keyItem.valid ){
        case 'DAY':
          comparator = this.date.getDate() === new Date(storeItem.date).getDate();
          break;
        case 'WEEK':
          comparator = currentWeekNumber(this.date) === currentWeekNumber( new Date(storeItem.date) );
          break;
        case 'MONTH':
          comparator = this.date.getMonth() === new Date(storeItem.date).getMonth();
          break;
        default:
          throw Error('Store: Unknown Mode');
      }
      //check validity
      if( comparator ){
        return storeItem.data;
      } else {
        return this.fromApi( keyItem, modifier, storeItem.data );
      }
    } catch(e){
      console.warn(e);
      return;
    }
  }

  private buildUrl( url: string, query: string, queryParams: string[] = [] ): string {
    if( url ){ return url; }

    let extraParams = queryParams.join('&');

    let user = (this.state.get('USER') || {} as StoredItem<StoredUser>).data as StoredUser;
    return `${this.api}?query=${query}&lang=${user.language}&username=${user.username}&password=${user.password}&mode=student&${ extraParams }`;
  }

  private async getUser(){
    try {
      let user;
      user = this.state.get('USER');
      if( !user ){
        let state = await this.storage.get('STATE');
        user = state.USER;
        console.log('getUser: ',state)
      }
      if( user && this.date.getMonth() === new Date(user.date).getMonth() ){
        return user.data;
      } else {
        return null;
      }
    } catch(e){
      console.warn(e);
    }
  }
  public async getLogin(){
    let login = this.state.get('LOGIN');
    if( login && this.date.getMonth() === new Date(login.date).getMonth() ){
      return login.data;
    } else {
      return null;
    }
  }
  public persist(){
    this.state.save();
  }
  public setUser(user){
    this.state.set('USER', {
      date: this.date,
      data: user
    });
  }
  public clear(): Promise<null> {
    return this.storage.clear().then( () => {
      console.log('cleared storage')
      return this.state.clear();
    });
  }
}
