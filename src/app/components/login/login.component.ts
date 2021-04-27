import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/user';
import {Form} from '@angular/forms';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {

  public pageTitle: string;
  public user: User;
  public form: Form;
  public status: string;
  public token: string;
  public identity;

  /*form: any = {
    email: null,
    password: null
  };*/

  constructor(
    private _userService: UserService
  ) {
    this.pageTitle = 'Identificate';
    this.user = new User(20, '', '', 'ROLE_USER', '', '', '', '');

  }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  onSubmit(form) {
    this._userService.signup(this.user).subscribe(
      response => {
        // token
        if (response.status !== 'error') {
          this.status = 'success';
          this.token = response;

          // Objeto usuario identificado
          this._userService.signup(this.user, true).subscribe(
            response => {
              this.identity = response;
              console.log(this.token);
              console.log(this.identity);
            },
            error => {
              this.status = 'error';
              console.log(<any> error);
            }
          );

        } else {
          this.status = 'error';
        }
      },

      error => {
        this.status = 'error';
        console.log(<any> error);
      }
    );
  }
}
