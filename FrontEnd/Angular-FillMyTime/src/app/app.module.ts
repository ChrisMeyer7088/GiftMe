import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './Components/registration-page/registration-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ValidateService } from './Services/validate.service';
import { AuthService } from './Services/auth.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthGuardService } from './Services/Guards/auth-guard.service';
import { LoginGuardService } from './Services/Guards/login-guard.service';
import { ExchangeButtonComponent } from './Components/exchange-button/exchange-button.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    WelcomePageComponent,
    NavbarComponent,
    ExchangeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFlashMessagesModule,
    HttpClientModule
  ],
  providers: [ValidateService, AuthService, AuthGuardService, LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
