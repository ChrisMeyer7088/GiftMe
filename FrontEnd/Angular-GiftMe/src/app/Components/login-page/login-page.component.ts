import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ValidateService } from '../../Services/validate.service';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  UserName: String;
  Password: String;

  constructor(
    private flashMessage: NgFlashMessageService,
    private validateService: ValidateService,
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

  onLoginUser() {
    console.log('Running onLoginUser()');
    let user = {
      UserName: this.UserName,
      Password: this.Password
    };

    if(!this.validateService.validateLogin(user))
      this.createMessage('All fields must be filled out to attempt login');
    else {
      this.authService.loginUser(user).subscribe(data => {
        if(data.success) {
          this.flashMessage.showFlashMessage({
            messages: ['Login Successful'],
            dismissible: false,
            timeout: 2000,
            type: 'success'
          });
          this.authService.storeUserData(data.token, data.user);
          this.router.navigate(['/home']);
        } else {
          this.createMessage('Invalid Credentials');
        }
      });
    }
  }
}
