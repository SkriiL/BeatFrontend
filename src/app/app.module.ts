import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FreeBeatsComponent } from './pages/free-beats/free-beats.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BeatService} from './services/beat.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminBeatsComponent } from './pages/admin/admin-beats/admin-beats.component';
import {BeatTypeService} from './services/beat-type.service';

@NgModule({
  declarations: [
    AppComponent,
    FreeBeatsComponent,
    NavbarComponent,
    AdminComponent,
    AdminBeatsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    BeatService,
    UserService,
    BeatTypeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
