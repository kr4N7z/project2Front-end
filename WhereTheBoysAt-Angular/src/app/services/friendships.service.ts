import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Friend } from '../models/friend';
import { Friendship } from '../models/friendship';

@Injectable({
  providedIn: 'root'
})
export class FriendshipsService {

  constructor(private httpClient:HttpClient) { }

  insertFriend(receiverId, approved, userId):Observable<any> {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('userId', userId);
    params = params.append('receiverId', receiverId);
    params = params.append('approved', approved)
    return this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/insert", {}, {headers:headers,withCredentials:true,params:params});
    //return this.httpClient.post("http://localhost:8088/WhereTheBoysAt/friendship/insert", {},  {headers:headers,withCredentials:true,params:params});
  }

  updateFriend(receiverId, approved, userId):Observable<any> {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('userId', userId);
    params = params.append('receiverId', receiverId);
    params = params.append('approved', approved)
    return this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/update", {}, {headers:headers,withCredentials:true,params:params});
    //return this.httpClient.post("http://localhost:8088/WhereTheBoysAt/friendship/update", {}, {headers:headers, withCredentials:true,params:params});
  }

  viewAllFriendships(userId) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewAllFriendships",{headers:headers,withCredentials:true,params:params}) as Observable<Friendship[]>;
    //return this.httpClient.get("http://localhost:8088/WhereTheBoysAt/friendship/viewAllFriendships",{headers:headers,withCredentials:true,params:params}) as Observable<Friendship[]>;
  }
  
  viewMyFriendships(userId) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewMyFriendships",{headers:headers,withCredentials:true,params:params}) as Observable<Friendship[]>;
    //return this.httpClient.get("http://localhost:8088/WhereTheBoysAt/friendship/viewMyFriendships",{headers:headers,withCredentials:true,params:params}) as Observable<Friendship[]>;
  }

  //cant add as Observable<Friendship[]> to this one for some reason
  getFrindship(receiverId, userId) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('userId', userId);
    params = params.append('receiverId', receiverId);
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewFriendship",{headers:headers,withCredentials:true,params:params}) as Observable<Friendship>;
    //return this.httpClient.get("http://localhost:8088/WhereTheBoysAt/friendship/viewFriendship",{headers:headers,withCredentials:true,params:params}) as Observable<Friendship>;
  }

  removeFriendship(receiverId, userId):Observable<any> {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('userId', userId);
    params = params.append('receiverId', receiverId);
    return this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/removeFriendship", {}, {headers:headers,withCredentials:true,params:params});
    //return this.httpClient.post("http://localhost:8088/WhereTheBoysAt/friendship/removeFriendship", {}, {headers:headers,withCredentials:true,params:params});
  }

  viewAllMyRequests(userId) {
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/getUnapproved",{headers:headers,withCredentials:true,params:params}) as Observable<Friend[]>;
    //return this.httpClient.get("http://localhost:8088/WhereTheBoysAt/friendship/getUnapproved",{headers:headers,withCredentials:true,params:params}) as Observable<Friend[]>;
  }
}
