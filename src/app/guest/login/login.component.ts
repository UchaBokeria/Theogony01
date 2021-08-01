import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  FormData = {
    username: null,
    password: null,
    capcha: null
  };
  constructor() { }

  ngOnInit(): void {
  }
  username(username: any) {
    this.FormData.username = username;
    console.log(username);
  }
  password(password: any) {
    this.FormData.password = password;
    console.log(password);
  }
  capcha(capcha: any) {
    this.FormData.capcha = capcha;
    console.log(capcha);
  }
}
