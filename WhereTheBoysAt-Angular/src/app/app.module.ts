import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapsvgComponent } from './map/mapsvg/mapsvg.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FriendshipsComponent } from './friendships/friendships.component';
import { FriendshipListComponent } from './friendship-list/friendship-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapsvgComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    FriendshipsComponent,
    FriendshipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
