import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-button',
  templateUrl: './exchange-button.component.html',
  styleUrls: ['./exchange-button.component.scss']
})
export class ExchangeButtonComponent implements OnInit {
  showForm: boolean = false;
  exchTitle: String;
  minExchPrice: String;
  maxExchPrice: String;
  constructor() { }

  ngOnInit() {
  }

  displayForm() {
    this.showForm = true;
  }

  hideForm() {
    this.showForm = false;
  }

  createExchange(){
    if(this.exchTitle == null) this.exchTitle ='';
    if(this.minExchPrice == null) this.minExchPrice ='0';
    if(this.maxExchPrice == null) this.maxExchPrice ='0';


  }
}
