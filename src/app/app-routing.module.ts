import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { GameTableComponent } from './main/game-table/game-table.component';
import { AboutComponent } from './main/about/about.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'home', component: MainComponent, pathMatch: 'full' },
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'game/:opponent/:size', component: GameTableComponent },
  {path: 'about', component: AboutComponent, pathMatch: 'full'},  
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
