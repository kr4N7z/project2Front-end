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
      console.log("did not successfully logout!")
      this.route.navigate(['/home']);
    }
  }
  register(){
    console.log("trying to register with: ");
    console.log(this.registration);
    this.registerService.register(this.registration).subscribe(
      (data)=>{
        this.parseData(data);
      },
      ()=>{
        document.getElementById("error").innerHTML = "Email or Password is invalid";
        console.log("something went wrong");
      }
    )
  }

}
