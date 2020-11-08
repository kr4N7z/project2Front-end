import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component'
import { ChatService } from 'src/app/services/chat.service';
import { LogoutService} from 'src/app/services/logout.service';
import { Router } from '@angular/router';
import { Friend } from 'src/app/models/friend';
import { Message } from 'src/app/models/message';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private logoutService:LogoutService,private appComponent:AppComponent,private chatService:ChatService) { }
  myFriends= this.appComponent.myFriends;
  userId = this.appComponent.userId;
  private reciever:number;
  timesclicked:number=1;
  myMessages:Message[];
  openContacts(clicked):void{

  }

  openChat(clicked):void{
    console.log(clicked.currentTarget.id);  
    this.reciever= clicked.currentTarget.id;
    if(this.timesclicked % 2 != 0){
      for(let i in this.myFriends){
        if(this.myFriends[i].userId!=clicked.currentTarget.id){
          document.getElementById(this.myFriends[i].userId.toString()).style.display='none';
        }else{
         // let element = document.createElement('div');
          //element.className="action_menu";
          //element.style.display="block";
          //let list = document.createElement('ul');
          //let item = document.createElement('li');
          //let img = document.createElement('i');
          //img.className="fas fa-user-circle";
          //item.append(img);
          //item.innerText="View All Contacts";
          //item.addEventListener("click", (evt) =>this.openContacts(evt))
          //list.appendChild(item);
          //element.appendChild(list);
          //document.getElementById(this.myFriends[i].userID.toString()).appendChild(element);
        
        }
      }
  }else{
    for(let i in this.myFriends){
      document.getElementById(this.myFriends[i].userId.toString()).style.display='block';
    }
  }
  this.timesclicked++;
}
 
  ngOnInit(): void {
   let container=document.getElementById("chat-container");
   for(let friend in this.myFriends){
     let element = document.createElement('div');
     let element2 = document.createElement('div');
     let element3 = document.createElement('div');
     let element4 = document.createElement('span');
     element.className="card-header msg-head"
     element.style.height="70px";
     element2.className="d-flex bd-highlight";
     element3.className="user_info";
     element.id = this.myFriends[friend].userId.toString();
     element4.innerHTML=this.myFriends[friend].firstName + " "+ this.myFriends[friend].lastName;
     element4.style.color="white";
     element4.style.fontSize="20px";
     element3.appendChild(element4);
     element2.appendChild(element3);
     element.appendChild(element2);
     element.addEventListener("click", (evt) =>this.openChat(evt));
     container.appendChild(element);
    }
    console.log(this.appComponent.userId);
    this.chatService.chat(this.appComponent.userId).subscribe(
      data => {
        this.myMessages=data;
        console.log(data);

    },
    ()=>{
      console.log("Something went wrong! Can't get messages!")

    });
  }
 
}

