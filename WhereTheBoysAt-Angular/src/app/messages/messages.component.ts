import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component'
import { ChatService } from 'src/app/services/chat.service';
import { SendchatService} from 'src/app/services/sendchat.service';

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

  constructor(private logoutService:LogoutService,private appComponent:AppComponent,private chatService:ChatService,private sendChatService:SendchatService) { }
  myFriends= this.appComponent.myFriends;
  userId = this.appComponent.userId;
  private reciever:number;
  timesclicked:number=1;
  myMessages:Message[];
  chatMessages:Message[];
  chatCount:number;
  openContacts(clicked):void{

  }

  openChat(clicked):void{
    let container=document.getElementById("chat-container");
    console.log(clicked.currentTarget.id);  
    this.reciever= clicked.currentTarget.id;
    let checkCarbodyIf = document.getElementsByClassName('card-body');
    if(checkCarbodyIf.length>0){
      let remove = document.querySelector('#cardbody');
      while(remove.firstChild){
        remove.removeChild(remove.firstChild);
      }
    }
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
      this.chatMessages=[];
      let cardbody = document.createElement('div');
      cardbody.id ='cardbody';
      cardbody.className='card-body msg_card_body';
      for(let j in this.myMessages){
        if(this.myMessages[j].senderId == clicked.currentTarget.id || this.myMessages[j].receivedId == clicked.currentTarget.id){
          this.chatMessages.push(this.myMessages[j]);
        }
      }
      for(let k in this.chatMessages){
        let element = document.createElement('div');
        let element2 = document.createElement('div');
        let element3 = document.createElement('span');
          
        if(this.chatMessages[k].senderId == clicked.currentTarget.id){
          element.className='d-flex justify-content-start mb-4';
          element2.className='msg_cotainer';
          element3.className='msg_time';
        }else{
          element.className='d-flex justify-content-end mb-4';
          element2.className='msg_cotainer_send';
          element3.className='msg_time_send';
        }
        
        element2.innerText = this.chatMessages[k].message;
        let date = this.setDate(this.chatMessages[k].sentTime);
        element3.innerText=date;
        element2.appendChild(element3);
        element.appendChild(element2);
        cardbody.appendChild(element);
        
      }
      container.appendChild(cardbody);
      
      let cardFooter =document.createElement('div');
      cardFooter.className="card-footer";
      cardFooter.id= "cardfooter";
      let input = document.createElement('div');
      input.className="input-group"
      
      let chatarea = document.createElement('textarea');
      chatarea.className="form-control type_msg";
      chatarea.id="chatarea";
      chatarea.setAttribute('placeholder','Type your message here...');
      
      let divbut = document.createElement('div');
      divbut.className='input-group-append';
      divbut.addEventListener("click",e => this.sendMessage(e))
      let spanbut = document.createElement('span');
      spanbut.className="input-group-text send_btn";

      let ibutton = document.createElement('i');
      ibutton.className='fas fa-location-arrow';
      spanbut.appendChild(ibutton);
      divbut.appendChild(spanbut);
      input.appendChild(chatarea);
      input.appendChild(divbut);
      cardFooter.appendChild(input);
      container.appendChild(cardFooter);
  }else{
    let conQuery=document.querySelector('#chat-container');
    while(conQuery.lastElementChild.id == 'cardbody' || conQuery.lastElementChild.id == 'cardfooter' ){
      conQuery.removeChild(conQuery.lastChild);
    }
    for(let i in this.myFriends){
      document.getElementById(this.myFriends[i].userId.toString()).style.display='block';
    }
  }

  this.timesclicked++;
}

sendMessage(msg){
  let text = (<HTMLInputElement>document.getElementById('chatarea'));
  let chatMessage = new Message(0,this.appComponent.userId,this.reciever,text.value,new Date(),true);
  this.sendChatService.sendchat(chatMessage).subscribe();
  (<HTMLInputElement>document.getElementById('chatarea')).value="";
  let currentContainer = document.getElementById('cardbody');
  let element = document.createElement('div');
  let element2 = document.createElement('div');
  let element3 = document.createElement('span');
  element.className='d-flex justify-content-end mb-4';
  element2.className='msg_cotainer_send';
  element2.innerText=text.value;
  element3.className='msg_time_send';
  let date = this.setDate(new Date());
  element3.innerText=date;
  element2.appendChild(element3);
  element.appendChild(element2);
  currentContainer.appendChild(element);


}

setDate(date){
  let day = new Date(date)
  let daY = day.getDate();
  let month = day.getMonth()+1;
  let time = day.toString().split(' G')[0];
  time = time.split('0 ')[1];
  return time+" "+ month.toString() +"/"+ daY.toString();
}



  ngOnInit(): void {
   let container=document.getElementById("chat-container");
   this.chatCount = this.myFriends.length;
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
        this.myMessages = data;
        console.log(data);
    },
    ()=>{
      console.log("Something went wrong! Can't get messages!")

    });
  }
 
}

