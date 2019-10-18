import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FreeBeatsComponent } from './pages/free-beats/free-beats.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BeatsService} from './services/beats.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FreeBeatsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    BeatsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
