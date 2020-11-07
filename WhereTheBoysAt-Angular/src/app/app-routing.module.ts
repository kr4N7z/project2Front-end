import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MessagesComponent } from './messages/messages.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component'

const routes: Routes = [
  {path:'', component:LoginComponent},
  { path: 'home', component: HomeComponent },
  {path:'register', component:RegistrationComponent},
  {path: 'messages', component:MessagesComponent},
  {path: 'updateprofile', component:UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
