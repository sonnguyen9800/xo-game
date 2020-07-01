import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../cell/cell.interface';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent implements OnInit, Cell {


  // state: represent the state of each cell.
  // 0: blank cell; 1: first-person marked; 2: second-person   
  @Input('row') row: number;
  @Input('column') column: number;
  @Input('state') state: number = 0;

  
  constructor() { }


  ngOnInit(): void {
  }

  changeState(state: number){
    this.state = state;
  }
}
