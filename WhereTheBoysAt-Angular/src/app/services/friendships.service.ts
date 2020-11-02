import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

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

  viewAllFriendships(receiver_id) {
    this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewAllFriendships", receiver_id);
  }
  
  viewMyFriendships() {
    this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewMyFriendships");
  }

  getFrindship(receiver_id) {
    this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/viewFriendship", receiver_id);
  }

  removeFriendship(receiver_id) {
    this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/friendship/", receiver_id);
  }
}
