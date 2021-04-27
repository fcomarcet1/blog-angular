import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../Models/user';
import { global_config } from '../global_config';

@Injectable()
export class UserService {

  public url: string;
  // public urlTest: string;

  constructor(
    // tslint:disable-next-line:variable-name
    public _http: HttpClient,
  ) {
    // this.urlTest = global_config.url_test;
    this.url = global_config.url;
  }


  // tslint:disable-next-line:typedef
  test(){
    return 'Hola mundo desde user service';

  }

  // tslint:disable-next-line:typedef
  register(user){
    // set params for send request
    let json = JSON.stringify(user);
    let params = 'json=' + json; // key:'json' que recibe el backend -> register()
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // console.log(params);
    // throw new Error('Error intentionally created to halt process. Not an actual error.');

    // send request
    return this._http.post(this.url + 'register', params, {headers: headers});
  }

  signup(user, getToken = null): Observable<any>{

    if (getToken != null){
      user.getToken = 'true';
    }

    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'login', params, {headers: headers});
  }
}
