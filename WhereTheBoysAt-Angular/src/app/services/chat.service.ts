import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient:HttpClient) {}
    chat(loginCredentials):Observable<Object>{

      let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
      //expecting login credentials to have email and password properties set.
      let body = JSON.stringify(loginCredentials);
      return this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/login", body,{headers:headers, withCredentials:true})  as Observable<Friend>;
      //return this.httpClient.post<Friend>("http://localhost:8088/WhereTheBoysAt/user/login", body,{headers:headers, withCredentials:true})  as Observable<Friend>;
   }
   
}
