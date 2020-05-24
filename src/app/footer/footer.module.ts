import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import FooterComponent
import { FooterComponent } from './footer.component';

// Import Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


// Add Fontawesome module:
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Add FlexLayoutModule:
import { FlexLayoutModule } from '@angular/flex-layout'
@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
