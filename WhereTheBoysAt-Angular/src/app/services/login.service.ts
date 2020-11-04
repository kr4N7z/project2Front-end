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
    return this.httpClient.post<Friend>("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/login", body,{headers:headers, withCredentials:true})  as Observable<Friend>;
    //return this.httpClient.post<Friend>("http://localhost:8088/WhereTheBoysAt/user/login", body,{headers:headers, withCredentials:true})  as Observable<Friend>;
 }
}
