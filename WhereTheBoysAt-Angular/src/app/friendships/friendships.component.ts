import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { Friend } from 'src/app/models/friend';
import { UserService } from '../services/user.service';
import { FriendshipsService } from '../services/friendships.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.css']
})
export class FriendshipsComponent implements OnInit {

  constructor(private friendsService:FriendsService, private friendshipsService:FriendshipsService, private userService:UserService, private appComponent:AppComponent, private route:Router) { }

  emailToAdd;
  private friend:Friend;

  addFriend() {
    this.userService.getUserByEmail(this.emailToAdd).subscribe(
      data => {
        this.friend = data;
        this.friendshipsService.insertFriend(this.friend.userId, false, this.appComponent.userId);
        //console.log(data.userId);
        this.route.navigate(['/friendships']);
      },
      () => {
        console.log("Something went wrong! Can't fetch friends!")
      }
    ) ;
  }

  ngOnInit(): void {
  }

}
