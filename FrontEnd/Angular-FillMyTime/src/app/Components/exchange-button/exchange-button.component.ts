import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-button',
  templateUrl: './exchange-button.component.html',
  styleUrls: ['./exchange-button.component.scss']
})
export class ExchangeButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayForm() {
    document.getElementById("CreateExchangeForm").style.display = "block";
  }

  hideForm() {
    document.getElementById("CreateExchangeForm").style.display = "none";
  }

}
