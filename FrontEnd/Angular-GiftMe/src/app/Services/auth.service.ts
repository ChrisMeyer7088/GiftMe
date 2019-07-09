import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) {}

  registerUser(user): Observable<any> {
    let httpOptions = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post("http://localhost:3000/Register", user, {
        headers: httpOptions
      })
      .pipe(map(res => res));
  }

  loginUser(user): Observable<any> {
    let httpOptions = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post("http://localhost:3000/Login", user, { headers: httpOptions })
      .pipe(map(res => res));
  }

  getWelcomePage(): Observable<any> {
    let httpOptions = new HttpHeaders({ "Content-Type": "application/json" });
    this.loadToken();
    let headers = httpOptions.append('Authorization', this.authToken);
    return this.http
      .get("http://localhost:3000/Home", { headers: headers })
      .pipe(map(res => res));
  }

  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  }

  isLoggedIn() {
    let jwtHelper = new JwtHelperService();
    if(localStorage.id_token == undefined)
      return false;
    return !jwtHelper.isTokenExpired(localStorage.id_token);
  }

  logout() {
    this.authToken = null;
    this.user = null;
    window.localStorage.clear();
  }
}
