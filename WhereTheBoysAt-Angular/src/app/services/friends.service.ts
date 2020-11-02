import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Friend } from '../models/friend'


@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private httpClient:HttpClient) { }

  insertFriend(reciever_id) {
    this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/friendship/insert", reciever_id);
  }
  
  getAllFriends():Observable<Friend[]>{
    return this.httpClient.get("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/user/myfriends") as Observable<Friend[]>;
  }

}
