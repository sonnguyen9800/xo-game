import { Cell } from './cell.interface';
import { Input } from '@angular/core';

export class CellImp implements Cell {
  @Input('row') row: number;
  @Input('column') column: number;
  @Input('state') state: number;


  constructor(row: number, column: number ){
    this.row = row;
    this.column = column;
    this.state = 0;    
  }


  
}
