import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import {ExchangeButtonComponent} from '../exchange-button/exchange-button.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  user: any;
  events: any;
  holiday: any;
  today: any;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.getWelcomePage().subscribe(data => {
      this.user = data.user;
      this.events = data.events;
      this.holiday = data.holiday;
      this.setTodayString();
    },
    err => {
      console.log(err);
      return false;
    });
  }

  setTodayString() {
    let temp = new Date;
    this.today = this.getMonth(temp.getMonth() + 1) +' ' + temp.getDate().toString() + ', ' + temp.getFullYear().toString();
  }

  getMonth(monthNumber) {
    if(monthNumber == '1')
      return 'January';
    if(monthNumber == '2')
      return 'Febuary';
    if(monthNumber == '3')
      return 'March';
    if(monthNumber == '4')
      return 'April';
    if(monthNumber == '5')
      return 'May';
    if(monthNumber == '6')
      return 'June';
    if(monthNumber == '7')
      return 'July';
    if(monthNumber == '8')
      return 'August';
    if(monthNumber == '9')
      return 'September';
    if(monthNumber == '10')
      return 'October';
    if(monthNumber == '11')
      return 'November';
    if(monthNumber == '12')
      return 'December';
  }
}
