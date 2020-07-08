import { Injectable } from '@angular/core';
import { CellImp } from './main/cell/CellImp';
import { Player } from './Player';
import * as _ from  'lodash';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  private WIN_CONDITION : number = 5;
  constructor() { }

  private FirstPlayerCells : CellImp[] = [];
  private SecondPlayerCells : CellImp[] = [];

  private lastPlayer : Player;

 

  findWinningSegment(selectedCell: CellImp, otherCells: CellImp[]) : boolean{
    // console.log("Finding Winning Segment for :")
    // console.log(selectedCell);
    
    // Analyze
    var possibleCandidates : [CellImp, CellImp, CellImp, CellImp,
			      CellImp, CellImp, CellImp, CellImp];
    possibleCandidates = [ new CellImp(-1, -1), new CellImp(-1, -1),
			   new CellImp(-1, -1), new CellImp(-1, -1),
			   new CellImp(-1, -1), new CellImp(-1, -1),
			   new CellImp(-1, -1), new CellImp(-1, -1)]

    // These two below number should be fixed
    var selectedRow = selectedCell.row;
    var selectedColumn = selectedCell.column;

    //Finding cell for 1 position:
    otherCells.forEach((cell) => {
      // console.log("Checking cell:");
      // console.log(cell);
      
      if (cell.row == selectedRow-1 &&
    	  cell.column == selectedColumn-1 &&
    	  cell.state == selectedCell.state){
    	// First case => First position (Leftmost-top position)
    	possibleCandidates[0] = cell;	
      } else if (cell.row == selectedRow-1 &&
    		 cell.column == selectedColumn
    		 && cell.state == selectedCell.state){
    	// Second case => Second position (Middle-top position)
    	possibleCandidates[1] = cell;
      } else if (cell.row == selectedRow-1 &&
    		 cell.column == selectedColumn +1
    		 && cell.state == selectedCell.state){
    	// Third case => Second position (Rightmost-top position)
    	possibleCandidates[2] = cell;
      } else if (cell.row == selectedRow &&
    		 cell.column == selectedColumn+1
    		 && cell.state == selectedCell.state){
    	// Forth case => Rightmost-middle position)
    	possibleCandidates[3] = cell;
      } else if (cell.row == selectedRow+1 &&
    		 cell.column == selectedColumn+1
    		 && cell.state == selectedCell.state){
    	// Fifth case => Rightmost-low position)
    	possibleCandidates[4] = cell;
      } else if (cell.row == selectedRow+1 &&
    		 cell.column == selectedColumn
    		 && cell.state == selectedCell.state){
    	// Sixthe case => Middle, low position
	// console.log("Somehing wrong...");
    	possibleCandidates[5] = cell;
      } else if (cell.row == selectedRow+1 &&
    		 cell.column == selectedColumn-1
    		 && cell.state == selectedCell.state){
    	// Seven case => Leftmost, low position
    	possibleCandidates[6] = cell;
      } else if (cell.row == selectedRow &&
    		 cell.column == selectedColumn-1
    		 && cell.state == selectedCell.state){
    	// Eight case => Leftmost, middle position
    	possibleCandidates[7] = cell;	
      } else {
    	// do nothing

      }           
    })

    for (var i = 0; i < 8 ; i++){
      if (possibleCandidates[i].row != -1){	
	// If the placeholder of matching candidates is not null => have matche value
	var counter = 1;
	// Begin counter;
	var direction = i;
	// initialize second matched cell for the winning segment
	var nextCell = possibleCandidates[i];

	// console.log("Possible Candidates: on direction " + i +" From cell of row"
	// 	    + selectedCell.row + " column: " + selectedCell.column);
	
	// console.log("Counter " + counter + "Current Cell");
	// console.log(nextCell);
	
	
	while (nextCell != null && nextCell.state == selectedCell.state){

	  
	  counter = counter + 1;
	  nextCell = this.nextCellMatchResult(nextCell, direction, otherCells);
	  
	  // console.log("Counter " + counter + "Current Cell");	  
	  // console.log(nextCell);
	};
	
	if (counter >= this.WIN_CONDITION && nextCell == null ){
	  // Counter reaches requires limit and nextcell.state is not belong to opponent
	//  console.log("VICTORY FOR YOU!!!!")
	  return true
	}		
      }
    }    
    return false;
  }


  // Checking cell()
  
  nextCellMatchResult(selectedCell : CellImp, direction: number, otherCells: CellImp[]): CellImp{
    // console.log("Selected Cell:")
    // console.log(selectedCell);
    
    var OpponentCell : CellImp[];
    if (selectedCell.state == Player.PLAYER_ONE){
      OpponentCell = this.SecondPlayerCells;
    }

    if (selectedCell.state == Player.PLAYER_TWO){
      OpponentCell = this.FirstPlayerCells;
    }

    
    var nextCell : CellImp = new CellImp(-1, -1);
    switch (direction){
	// direction one
      case(0):{
	// first case
	nextCell.row = selectedCell.row -1 ;
	nextCell.column = selectedCell.column - 1;	
	break;
      }

      case(1):{
	// Second case
	nextCell.row = selectedCell.row -1 ;
	nextCell.column = selectedCell.column;
	break;
      }

      case(2):{
	// Third case
	nextCell.row = selectedCell.row-1 ;
	nextCell.column = selectedCell.column + 1;
	break;
      }
	
      case(3):{
	// Forth case
	nextCell.row = selectedCell.row ;
	nextCell.column = selectedCell.column + 1;
	break;
      }
	
      case(4):{
	// Fifth case
	nextCell.row = selectedCell.row + 1 ;
	nextCell.column = selectedCell.column + 1 ;
	break;
      }
	
      case(5):{
	// Second case
	nextCell.row = selectedCell.row + 1 ;
	nextCell.column = selectedCell.column ;
	break;
      }
	
      case(6):{
	// Second case
	nextCell.row = selectedCell.row + 1 ;
	nextCell.column = selectedCell.column - 1 ;
	
	break;
      }
	
      case(7):{
	// Second case
	nextCell.row = selectedCell.row  ;
	nextCell.column = selectedCell.column - 1 ;	
	break;
      }	
	
    }

    // console.log("Next expected cell in row:");
    // console.log(nextCell);

    
    OpponentCell.forEach((cell) => {
      if (cell.row == nextCell.row && cell.column == nextCell.column){
	nextCell = cell;
      }
    })

    otherCells.forEach((cell) => {
      if (cell.row == nextCell.row && cell.column == nextCell.column){
	nextCell = cell;
      }
    })
    if (nextCell.state != 0){
      return nextCell
    }
    // return 0 -> next cell is blank; 1 -> next cell is allied call; -1 : next cell is opponent cell
    return null;
  }
  

  
  
// This function take all input of one player's move and evaluate his winning state
  assertPlayerTable(PlayerCells : CellImp[]) : boolean{    
    // console.log("All Cell made by player " + PlayerCells[0].state + " is:");
    // console.log(PlayerCells)

    var flag = false;
    PlayerCells.some((cell) => {
      if (this.findWinningSegment(cell, PlayerCells) == true){
	flag = true;
      }
    })
    

    
    //default: return false
    return flag; 
  }


  addCell(cell: CellImp) : number{
    if (cell.state == Player.PLAYER_ONE){
      this.FirstPlayerCells.push(cell);

      // Evaluate
      this.lastPlayer = Player.PLAYER_ONE;
      var winYet = this.assertPlayerTable(this.FirstPlayerCells);
     console.log("Player 1 just make move "+ cell.row + ";" + cell.column + " Win?: " + winYet);

      if (winYet == true){return 1;}
    }
    else if (cell.state == Player.PLAYER_TWO){
      this.SecondPlayerCells.push(cell);

      // Evaluate
      this.lastPlayer = Player.PLAYER_TWO;
      var winYet = this.assertPlayerTable(this.SecondPlayerCells);

     console.log("Player 2 just make move "+ cell.row + ";" + cell.column + " Win?: " + winYet);

      if (winYet == true){
	return 2;
      }

    }
    else {
      //do nothing
      return 0;

    }
  }

}
