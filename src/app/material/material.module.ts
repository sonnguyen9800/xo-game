import { NgModule } from '@angular/core';



import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Module for checkbox of game mode - selection:
import { MatCheckboxModule } from '@angular/material/checkbox';

// Radio Button
import { MatRadioModule } from '@angular/material/radio';

// Module for City Search component
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
// Divider Module
import { MatDividerModule } from '@angular/material/divider';

// Gridlist Modules:
import {MatGridListModule} from '@angular/material/grid-list';

// Import FlexLayout (external library)
import { FlexLayoutModule } from '@angular/flex-layout';


import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule,
	    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule,
	    MatDividerModule, MatGridListModule, FlexLayoutModule, MatDialogModule  ],
  exports: [ MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule,
	     MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule,
	     MatDividerModule, MatGridListModule, FlexLayoutModule, MatDialogModule ],
  
})
export class MaterialModule { }
