import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component'
import { ChatService } from 'src/app/services/chat.service';
import { LogoutService} from 'src/app/services/logout.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private logoutService:LogoutService,private appComponent:AppComponent,private chatService:ChatService,private route:Router) { }

  ngOnInit(): void {
  }

}
