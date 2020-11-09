import { Component, OnInit } from '@angular/core';
import {RegisterService} from 'src/app/services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registerService:RegisterService, private route:Router) { }

  registration = {
    email:"",
    password:"",
    cpassword:"",
    firstName:"",
    lastName:""

  }
  ngOnInit(): void {
  }
  parseData(data){
    if(data.success){
      this.route.navigate(['/']);
    }else{
      console.log("Failed to register!")
      //this.route.navigate(['/register']);
      document.getElementById("password").innerHTML="";
      document.getElementById("last").innerHTML="";
      document.getElementById("first").innerHTML="";
      document.getElementById("email").innerHTML="";
      if(data.errorMessage==="Invalid email format"){
        document.getElementById("email").innerHTML=data.errorMessage;
      }
      else if(data.errorMessage==="First name must not be blank"){
        document.getElementById("first").innerHTML=data.errorMessage;
      }
      else if(data.errorMessage==="Last name must not be blank"){
        document.getElementById("last").innerHTML=data.errorMessage;
      }
      else if(data.errorMessage==="Password is too short"){
        document.getElementById("password").innerHTML=data.errorMessage;
      }
      else if(data.errorMessage==="Passwords do not match"){
        document.getElementById("password").innerHTML=data.errorMessage;
      }
    }
  }
  register(){
    console.log("trying to register with: ");
    console.log(this.registration);
    this.registerService.register(this.registration).subscribe(
      (data)=>{
        this.parseData(data);
      },
      (err)=>{
        console.log("something went wrong");
        console.log(err);
      }
    )
  }

}
