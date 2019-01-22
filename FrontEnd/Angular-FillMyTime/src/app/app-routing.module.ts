import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './Components/login-page/login-page.component';
import {RegistrationPageComponent} from './Components/registration-page/registration-page.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { AuthGuardService } from './Services/Guards/auth-guard.service';
import { LoginGuardService } from './Services/Guards/login-guard.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home',},
  {path: 'login',  canActivate: [LoginGuardService], component: LoginPageComponent},
  {path: 'register',  canActivate: [LoginGuardService], component: RegistrationPageComponent},
  {path: 'home', children: [
    {path: '', canActivate: [AuthGuardService], component: WelcomePageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
