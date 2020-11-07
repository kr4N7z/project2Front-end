import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { Friend } from 'src/app/models/friend';
import { UserService } from '../services/user.service';
import { FriendshipsService } from '../services/friendships.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.css']
})
export class FriendshipsComponent implements OnInit {

  constructor(private friendsService:FriendsService, private friendshipsService:FriendshipsService, private userService:UserService, private appComponent:AppComponent) { }

  emailToAdd;
  private friend:Friend[];

  addFriend() {
    this.userService.getUserByEmail(this.emailToAdd).subscribe(
      data => {
        this.friend = data;
      },
      () => {
        console.log("Something went wrong! Can't fetch friends!")
      }
    ) ;
    this.friendshipsService.insertFriend(this.friend[0].userId, false, this.appComponent.userId);
  }

  ngOnInit(): void {
  }

}
