import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private route:Router) { }

  ngOnInit(): void {
    
  }

  credentials = {
    email:"",
    password:""
  }
  parseData(data){
    console.log(data);
    if(data.userID){
      this.route.navigate(['/home']);
    }
  }

  postLoginCredentials(){
    //console.log(this.credentials);
    this.loginService.login(this.credentials).subscribe(
      (data)=>{
        this.parseData(data)
      },
      ()=>{
        document.getElementById("error").innerHTML = "Email or Password is invalid";
        console.log("something went wrong");
      }
    )

  }

  testRouterLinkFunction(){
    
  }
}
