import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMapTest';
  userId:number;
  userEmail:string;
  userFirstName:string;
  userLastName:string;
}