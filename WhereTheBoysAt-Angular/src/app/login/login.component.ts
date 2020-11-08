import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from 'src/app/services/login.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private appComponent:AppComponent, private route:Router) { }

  ngOnInit(): void {
    
  }

  credentials = {
    email:"",
    password:""
  }
  parseData(data){
    this.appComponent.userId = data.userId;
    this.appComponent.userEmail = data.email;
    this.appComponent.userFirstName = data.firstName;
    this.appComponent.userLastName = data.lastName;
    if(data.userId){
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
        document.getElementById("error").innerHTML="Invalid Username or Password";
        console.log("something went wrong");
      }
    )

  }

  // testSession(){
  //   this.loginService.test(this.loginService).subscribe(
  //     (data)=>{
  //       this.parseData(data);
  //     },
  //     ()=>{
  //     }
  //   )
  // }
}
