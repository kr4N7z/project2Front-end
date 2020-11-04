import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(loginCredentials):Observable<Object>{

    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    //expecting login credentials to have email and password properties set.
    let body = JSON.stringify(loginCredentials);
    return this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/login", body,{headers:headers})  as Observable<Object>;
    // return this.httpClient.post("http://localhost:8080/WhereTheBoysAt/user/login", body,{headers:headers})  as Observable<Object>;
 }
}
