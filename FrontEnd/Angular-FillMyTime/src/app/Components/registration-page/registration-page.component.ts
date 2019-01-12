import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../Services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  UserName: string;
  Password: string;
  Email: string;
  CPassword: string;

  constructor(private validateService: ValidateService, private flashMessage: NgFlashMessageService) { }

  ngOnInit() {
  }

  onRegisterUser() {

    const user = {
      UserName: this.UserName,
      Password: this.Password,
      Email: this.Email
    };

    if(!this.validateService.validateRegister(user)) {
      this.flashMessage.showFlashMessage({
        messages: ['All fields must be filled in to register!'],
        dismissible: true,
        timeout: false,
        type: 'danger'
      });
    }
    else if(!this.validateService.validateEmail(user.Email)) {
      this.flashMessage.showFlashMessage({
        messages: ['Must use a valid email!'],
        dismissible: true,
        timeout: false,
        type: 'danger'
      });
    }
    else if(!this.validateService.validatePassword(user.Password)) {
      this.flashMessage.showFlashMessage({
        messages: ['Password must be greater than 5 characters and contain at least 1 upper case letter and number!'],
        dismissible: true,
        timeout: false,
        type: 'danger'
      });
    }
    else if (this.CPassword !== this.Password)
    {
      this.flashMessage.showFlashMessage({
        messages: ['Passwords do not match!'],
        dismissible: true,
        timeout: false,
        type: 'danger'
      });
    }
    else {
      this.UserName = '';
      this.Password = '';
      this.CPassword = '';
      this.Email = '';
      }

  }
}
