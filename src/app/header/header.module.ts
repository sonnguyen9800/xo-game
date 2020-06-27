import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header.component';

// Angular:
//Angular Material Components
import {MatGridListModule} from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


// Import flex layout module
// Add FlexLayoutModule:
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    HeaderComponent
  ],


  imports: [
    MatButtonModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
