import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material

// Import Header module:
import { HeaderModule } from './header/header.module'

// Import Main Module
import { MainModule } from './main/main.module'

// Import Footer module:
import { FooterModule } from './footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    WinnerDialogComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule, FooterModule, FontAwesomeModule,
    MainModule,
    FlexLayoutModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
