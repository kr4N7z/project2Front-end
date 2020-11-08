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
        console.log("userService worked")
        this.friend = data;
        this.friendshipsService.insertFriend(this.friend.userId, false, this.appComponent.userId).subscribe(        
           data => {        
              //this.route.navigate(['/friendships']);      
              var addUserLabel = document.getElementById("addUserLabel");  
              addUserLabel.innerHTML = "Enter the email of the user you want to add    Request Sent!" 
           },
        );
      },
      () => {
        console.log("Something went wrong! Can't add friend!")
      }
    ) ;
  }

  ngOnInit(): void {
  }

}
