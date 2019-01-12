import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  LoginPost;
  UserName: String;
  Password: String;

  constructor() { }

  ngOnInit() {
  }

  onLoginUser() {
    alert('Attempting User Login');
  }
}
