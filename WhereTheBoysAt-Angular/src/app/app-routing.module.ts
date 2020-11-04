import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FriendshipsComponent } from './friendships/friendships.component'

const routes: Routes = [
  {path:'', component:LoginComponent},
  { path: 'home', component: HomeComponent },
  {path:'register', component:RegistrationComponent}
  {path: 'friendships', component:FriendshipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
