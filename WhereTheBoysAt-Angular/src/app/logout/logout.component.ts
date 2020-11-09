import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService} from 'src/app/services/logout.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService:LogoutService, private route:Router,private component:AppComponent) { }

  ngOnInit(): void {
  }
  parseData(data){
    console.log(data);
    if(data.success){
      console.log("success..... logging out now");
      this.component.myFriends=null;
      this.component.title=null;
      this.component.userEmail=null;
      this.component.userFirstName=null;
      this.component.userLastName=null;
      this.component.userId = null;

      this.route.navigate(["/"]);
    }else{
      console.log("failed to logout");
    }
  }
  logout(){
    //console.log("logout is firing");
    this.logoutService.logout().subscribe(
      (data)=>{
       //this.parseData(data)
       this.route.navigate(["/"]);
      }
    );
  }

}
