import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  RegisterPost;

  constructor() { }

  ngOnInit() {
  }

  onRegisterUser(emailInput: HTMLTextAreaElement, userNameInput: HTMLTextAreaElement, passwordInput: HTMLTextAreaElement, cpasswordInput: HTMLTextAreaElement) {

    if (passwordInput.value !== cpasswordInput.value)
      alert('Passwords do not match');
    else if (emailInput.value === '' || userNameInput.value === '' || passwordInput.value === '')
      alert('One or more fields have not been filled out');
    else
    {
      this.RegisterPost = {
        'Email': emailInput.value,
        'UserName': userNameInput.value,
        'Password': passwordInput.value
      };
    }

  }
}
