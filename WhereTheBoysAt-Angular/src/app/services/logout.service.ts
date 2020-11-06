import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private httpClient:HttpClient) { }
  logout():Observable<Object>{
    console.log("inside the logout service");
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    //expecting login credentials to have email and password properties set.
   
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/logout", {headers:headers})  as Observable<Object>;
    //return this.httpClient.get("http://localhost:8080/WhereTheBoysAt/user/logout", {headers:headers, withCredentials:true})  as Observable<Object>;
  }

}
