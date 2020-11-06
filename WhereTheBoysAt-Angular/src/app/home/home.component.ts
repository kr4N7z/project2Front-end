import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService} from 'src/app/services/logout.service';
import { AppComponent } from 'src/app/app.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logoutService:LogoutService, private appComponent:AppComponent, private route:Router) { }

  ngOnInit(): void {
    console.log(this.appComponent.userId)
  }

}
