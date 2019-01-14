import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

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
      .post("http://localhost:3000/Auth/Register", user, {
        headers: httpOptions
      })
      .pipe(map(res => res));
  }

  loginUser(user): Observable<any> {
    let httpOptions = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post("http://localhost:3000/Auth/Login", user, { headers: httpOptions })
      .pipe(map(res => res));
  }

  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    window.localStorage.clear();
  }
}
