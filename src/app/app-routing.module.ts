import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FreeBeatsComponent} from './pages/free-beats/free-beats.component';

const routes: Routes = [
  { path: 'free-beats', component: FreeBeatsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
