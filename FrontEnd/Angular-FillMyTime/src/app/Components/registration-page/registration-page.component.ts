import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../Services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private validateService: ValidateService,
    private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  createMessage(message) {
    this.flashMessage.showFlashMessage({
      messages: [message],
      dismissible: true,
      timeout: false,
      type: 'danger'
    });
  }

  onRegisterUser() {

    //Create User Object
    const user = {
      UserName: this.UserName,
      Password: this.Password,
      Email: this.Email
    };

    //Validate user information
    if(!this.validateService.validateRegister(user)) {
      this.createMessage('All fields must be filled in to register!');
    }
    else if(!this.validateService.validateEmail(user.Email)) {
      this.createMessage('Must use a valid email!');
    }
    else if(!this.validateService.validatePassword(user.Password)) {
      this.createMessage('Password must be greater than 5 characters and contain at least 1 upper case letter and number!');
    }
    else if (this.CPassword !== this.Password) {
    this.createMessage('Passwords do not match!');
    }
    else {
      //Register The User

      this.authService.registerUser(user).subscribe(data => {
        if(data.success) {
          this.router.navigate(['/login'])
          this.flashMessage.showFlashMessage({
            messages: ['You have been successfully registered'],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
        } else {
          this.createMessage('Something went wrong. Please try again and if this problem persists contact technical support');
        }
      });
      }

  }
}
