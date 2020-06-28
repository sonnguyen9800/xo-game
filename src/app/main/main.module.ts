import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent }  from './main.component';


// Import Angular-material:
import { MaterialModule  } from '../material/material.module';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameTableComponent } from './game-table/game-table.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    PageNotFoundComponent,
    GameTableComponent,
    CellComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
