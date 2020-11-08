import { Component, OnInit } from '@angular/core';
import { FriendshipsService } from 'src/app/services/friendships.service';
import { Friend } from 'src/app/models/friend';
import { AppComponent } from 'src/app/app.component';
import { fromEventPattern } from 'rxjs';
import { Router } from '@angular/router';
import { FriendshipListComponent } from 'src/app/friendship-list/friendship-list.component'

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.css']
})
export class FriendRequestsComponent implements OnInit {

  constructor(private friendshipsService:FriendshipsService, private appComponent:AppComponent, private route:Router) { }

  private friends:Friend[] = [];

  public toApprove;

  getFriendRequests(tbl){
    this.friendshipsService.viewAllMyRequests(this.appComponent.userId).subscribe(
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
        console.log("Something went wrong! Can't fetch friend requests!")
      }
    )
  }

  createTable(): void {
    var table_div = document.getElementById('table_div2');
    if(table_div.childNodes.length > 0) {
      while (table_div.hasChildNodes()) {  
        table_div.removeChild(table_div.firstChild);
      }
    }

    var tbl = document.createElement("table");
    var header_row = document.createElement("tr");

    var sender_cell = document.createElement("td");
    var sender_cell_text = document.createTextNode("Friend Requests");
    sender_cell.appendChild(sender_cell_text);
    header_row.appendChild(sender_cell);

    var id_cell = document.createElement("td");
    var id_cell_text = document.createTextNode("User Id");
    id_cell.appendChild(id_cell_text);
    header_row.appendChild(id_cell);
    tbl.appendChild(header_row);

    this.getFriendRequests(tbl);

    
    table_div.appendChild(tbl);
  }

  approveFriend() {
    this.friendshipsService.updateFriend(this.toApprove, true, this.appComponent.userId).subscribe(
      data => {
        this.friendshipsService.insertFriend(this.toApprove, true, this.appComponent.userId).subscribe(
          data => {
            this.createTable()
            //this.friendshipListComponent.createTable();
          }
        );
      }
    );
  }

  ngOnInit(): void {
    this.createTable();
  }
}
