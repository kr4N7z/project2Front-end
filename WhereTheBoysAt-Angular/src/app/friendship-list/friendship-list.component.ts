import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { Friend } from 'src/app/models/friend';
import { FriendshipsService } from '../services/friendships.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendship-list',
  templateUrl: './friendship-list.component.html',
  styleUrls: ['./friendship-list.component.css']
})

export class FriendshipListComponent implements OnInit {

  constructor(private friendsService:FriendsService, private friendshipsService:FriendshipsService, private appComponent:AppComponent, private route:Router) { }

  private friends:Friend[] = [];

  toDelete;

  getAllFriends(tbl){
    this.friendsService.getAllFriends(this.appComponent.userId).subscribe(
      data => {
        this.friends = data;

        for(let friend of this.friends) {
          var row = document.createElement("tr");
          var cell1 = document.createElement("td");
          var cellText1 = document.createTextNode(friend.firstName + " " + friend.lastName);
          cell1.appendChild(cellText1);
          row.appendChild(cell1);
    
          var cell2 = document.createElement("td");
          var cellText2 = document.createTextNode("" + friend.userId);
          cell2.appendChild(cellText2);
          row.appendChild(cell2);
    
          tbl.appendChild(row);
        }
      },
      () => {
        console.log("Something went wrong! Can't fetch friends!")
      }
    )
  }

  createTable(): void {
    var table_div = document.getElementById('table_div');
    if(table_div.childNodes.length > 0) {
      while (table_div.hasChildNodes()) {  
        table_div.removeChild(table_div.firstChild);
      }
    }

    var tbl = document.createElement("table");
    var header_row = document.createElement("tr");

    var receiver_cell = document.createElement("td");
    var receiver_cell_text = document.createTextNode("Friends");
    receiver_cell.appendChild(receiver_cell_text);
    header_row.appendChild(receiver_cell);

    var approved_cell = document.createElement("td");
    var approved_cell_text = document.createTextNode("User ID");
    approved_cell.appendChild(approved_cell_text);
    header_row.appendChild(approved_cell);
    tbl.appendChild(header_row);

    this.getAllFriends(tbl);

    table_div.appendChild(tbl);
  }

  deleteFriend() {
    this.friendshipsService.removeFriendship(this.toDelete, this.appComponent.userId).subscribe(
      data => {
        this.createTable();
      }
    );
  }

  ngOnInit(): void {
    this.createTable();
  }

}
