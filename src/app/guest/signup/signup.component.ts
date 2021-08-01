import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formData = {
    username: null,
    password: null,
    repeat: null,
    secretname: null
  };
  constructor() { }

  ngOnInit(): void {
  }
  username(username: any) { 
    this.formData.username = username;
    console.log(username);
  }
  password(password: any) {
    this.formData.password = password;
    console.log(password);
  }
  repeat(repeat: any) {
    this.formData.repeat = repeat;
    console.log(repeat);
  }
  secretname(secretname: any) {
    this.formData.secretname = secretname;
    console.log(secretname);
  }
}
