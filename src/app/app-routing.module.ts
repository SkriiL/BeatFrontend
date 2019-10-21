import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FreeBeatsComponent} from './pages/free-beats/free-beats.component';
import {AdminComponent} from './pages/admin/admin.component';
import {AdminBeatsComponent} from './pages/admin/admin-beats/admin-beats.component';

const routes: Routes = [
  { path: 'free-beats', component: FreeBeatsComponent},
  { path: '', component: FreeBeatsComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/beats', component: AdminBeatsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
