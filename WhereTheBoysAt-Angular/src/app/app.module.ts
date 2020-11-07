import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapsvgComponent } from './map/mapsvg/mapsvg.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateProfileService } from './services/update-profile.service';
import { FriendshipsComponent } from './friendships/friendships.component';
import { FriendshipListComponent } from './friendship-list/friendship-list.component';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapsvgComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    MessagesComponent,
    LogoutComponent,
    UpdateProfileComponent,
    FriendshipsComponent,
    FriendshipListComponent,
    FriendRequestsComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UpdateProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
