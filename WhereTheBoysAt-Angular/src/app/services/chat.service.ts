import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient:HttpClient) {}
    chat(loginCredentials):Observable<Message[]>{

      let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
      //expecting login credentials to have email and password properties set.
      //let body = JSON.stringify(loginCredentials);
      //return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/messages/getMyMessages", {headers:headers, withCredentials:true})  as Observable<Message[]>;
      return this.httpClient.post("http://localhost:8088/WhereTheBoysAt/messages/getMyMessages",{headers:headers, withCredentials:true})  as Observable<Message[]>;
   }
   
}
