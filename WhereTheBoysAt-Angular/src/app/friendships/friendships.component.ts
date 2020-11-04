import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { Friend } from 'src/app/models/friend';
import { FriendshipsService } from '../services/friendships.service';

@Component({
  selector: 'app-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.css']
})
export class FriendshipsComponent implements OnInit {

  constructor(private friendsService:FriendsService, private friendshipsService:FriendshipsService) { }

  emailToAdd;

  addFriend() {

  }

  ngOnInit(): void {
  }

}
