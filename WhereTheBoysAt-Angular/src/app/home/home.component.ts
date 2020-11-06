import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService} from 'src/app/services/logout.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logoutService:LogoutService, private route:Router) { }

  ngOnInit(): void {
  }
  parseData(data){
    console.log(data);
    if(data.success){
      console.log("success..... logging out now");
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
