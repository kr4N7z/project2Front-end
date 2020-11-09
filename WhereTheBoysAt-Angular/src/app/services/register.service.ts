import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient:HttpClient) { }

  register(registrationUser):Observable<Object>{

    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    //expecting login credentials to have email and password properties set.
    let body = JSON.stringify(registrationUser);
    console.log("sending: "+ body);
    //return this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/register", body,{headers:headers})  as Observable<Object>;
    return this.httpClient.post("http://localhost:8088/WhereTheBoysAt/user/register", body,{headers:headers})  as Observable<Object>;
 }
}
