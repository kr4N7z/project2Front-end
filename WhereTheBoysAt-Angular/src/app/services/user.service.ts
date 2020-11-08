import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Friend } from '../models/friend'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  //need to write a backend method/endpoint for this to hit
  getUserByEmail(email) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('email', email);

    //return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/userByEmail", {headers:headers,withCredentials:true,params:params}) as Observable<Friend>;
    return this.httpClient.get("http://localhost:8088/WhereTheBoysAt/user/userByEmail", {headers:headers,withCredentials:true,params:params}) as Observable<Friend>;
  }
}
