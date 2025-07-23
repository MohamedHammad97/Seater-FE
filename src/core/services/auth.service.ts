import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData :BehaviorSubject <any> = new BehaviorSubject('')

  constructor(private _http: HttpClient, private _router:Router) {
    if (localStorage.getItem("userToken")) {
      this.getUserData()
    }
   }

  getUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem("userToken"));
    let encoded = jwtDecode(encodedToken);
    this.userData.next(encoded)
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken'); 
  }


  register(data:any):Observable<any> {
    return this._http.post(`http://localhost:3000/api/v1/user`, data)
    // return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, data)
  }

  registerDetailsForm(data: any): Observable<any> {
    return this._http.post(`http://localhost:3000/api/v1/formDetails`, data)
    // return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, data)
  }
  login(data: any): Observable<any> {
    return this._http.post(`http://localhost:3000/api/v1/auth/signin`, data)
    // return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, data)
  }

  logOut() {
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._router.navigate(['/home']);
  }
}
