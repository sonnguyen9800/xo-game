import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogRef
} from "@angular/material/dialog";

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.css']
})
export class WinnerDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
	     public dialogRef: MatDialogRef<WinnerDialogComponent>) { }

  
  
  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
    
  }

}
