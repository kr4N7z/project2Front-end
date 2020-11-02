import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Friend } from '../models/friend'
import { Friendship } from '../models/friendship'

@Injectable({
  providedIn: 'root'
})
export class FriendshipsService {

  constructor(private httpClient:HttpClient) { }

  insertFriend(receiver_id, approved) {
    this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/insert", receiver_id, approved);
  }

  updateFriend(receiver_id, approved) {
    this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/update", receiver_id, approved);
  }

  viewAllFriendships() {
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewAllFriendships") as Observable<Friendship[]>;
  }
  
  viewMyFriendships() {
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewMyFriendships") as Observable<Friendship[]>;
  }

  //cant add as Observable<Friendship[]> to this one for some reason
  getFrindship(receiver_id) {
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewFriendship", receiver_id);
  }

  removeFriendship(receiver_id) {
    this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/removeFriendship", receiver_id);
  }

  viewAllMyRequests() {
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/getUnapproved") as Observable<Friend[]>;
  }
}
