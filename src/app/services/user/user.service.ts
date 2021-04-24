import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // tslint:disable-next-line:variable-name
    public _http: HttpClient
  ) {

  }

  // tslint:disable-next-line:typedef
  test(){
    return 'Hola mundo desde user service';
  }
}
