import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { TableComponent } from './table/table.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';


// Angular Material

// Import Header module:
import { HeaderModule } from './header/header.module'

// Import Footer module:
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    TableComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule, FooterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
