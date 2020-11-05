import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend'


@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private httpClient:HttpClient) { }

  getAllFriends():Observable<Friend[]>{
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get("http://localhost:8080/WhereTheBoysAt/user/myfriends",{headers:headers}) as Observable<Friend[]>
    //return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/myfriends") as Observable<Friend[]>;
 }

}
