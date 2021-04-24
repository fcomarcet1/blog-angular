import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import {Form, FormControl} from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {

  public pageTitle: string;
  public user: User;
  public form: Form;

  constructor(
    // tslint:disable-next-line:variable-name
    private _userService: UserService
  ) {
    this.pageTitle = 'Registro';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
  }

  ngOnInit(): void {
    console.log(this._userService.test());
  }


  // tslint:disable-next-line:typedef
  onSubmit(form) {
    console.log(this.user);
    form.reset();
  }
}
