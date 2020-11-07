import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Friend } from '../models/friend'


@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private httpClient:HttpClient) { }

  getAllFriends(userId):Observable<Friend[]>{
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    console.log(userId)
    let params = new HttpParams();
    params = params.append('userId', userId);
    // return this.httpClient.get("http://localhost:8080/WhereTheBoysAt/user/myfriends",{headers:headers, withCredentials:true,params:params}) as Observable<Friend[]>
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/myfriends",{headers:headers,withCredentials:true,params:params}) as Observable<Friend[]>;
 }

}
