import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent }  from './main.component';


// Import Angular-material:
import { MaterialModule  } from '../material/material.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
