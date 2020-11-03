import { Component, OnInit } from '@angular/core';
import { FriendshipsService } from 'src/app/services/friendships.service';
import { Friend } from 'src/app/models/friend';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.css']
})
export class FriendRequestsComponent implements OnInit {

  constructor(private friendshipsService:FriendshipsService) { }

  private friends:Friend[] = [];

  public toApprove;

  getFriendRequests(){
    this.friendshipsService.viewAllMyRequests().subscribe(
      data => {
        this.friends = data;
      },
      () => {
        console.log("Something went wrong! Can't fetch friends!")
      }
    )
  }

  createTable(): void {
    var table_div = document.getElementById('table_div');
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

    this.getFriendRequests();

    for(let friend of this.friends) {
      var row = document.createElement("tr");
      var cell1 = document.createElement("td");
      var cellText1 = document.createTextNode(friend.$firstName + " " + friend.$lastName);
      cell1.appendChild(cellText1);
      row.appendChild(cell1);

      var row = document.createElement("tr");
      var cell1 = document.createElement("td");
      var cellText1 = document.createTextNode("" + friend.$userId);
      cell1.appendChild(cellText1);
      row.appendChild(cell1);

      tbl.appendChild(row);
    }
  }

  //make this reload the page
  approveFriend() {
    this.friendshipsService.updateFriend(this.toApprove, true);
    this.friendshipsService.insertFriend(this.toApprove, true);
  }

  ngOnInit(): void {
    this.createTable();
  }
}
