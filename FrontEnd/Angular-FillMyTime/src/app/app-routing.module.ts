import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './Components/login-page/login-page.component';
import {RegistrationPageComponent} from './Components/registration-page/registration-page.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login',},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: 'home', children: [
    {path: '', component: WelcomePageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
