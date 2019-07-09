import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.Email == undefined || user.Password == undefined || user.UserName == undefined || user.UserName == '' || user.Email == '' || user.Password == '')
      return false;
    else
      return true;
  }

  validateEmail(emailAddress) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))
      return (true);
    else
      return (false);
  }

  validatePassword(password : string) {
    if(password.length > 4 && /\d/.test(password) && /[A-Z]/.test(password))
      return true;
    else
      return false;
  }

  validateLogin(user) {
    if(user.UserName == undefined || user.UserName == '' || user.Password == undefined || user.Password == '')
      return false;
    else
      return true;
  }
}
