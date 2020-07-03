import { Injectable } from '@angular/core';
import { CellImp } from './main/cell/CellImp';
import { Player } from './Player';
import * as _ from  'lodash';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  private WIN_CONDITION : number = 4;
  constructor() { }

  private FirstPlayerCells : CellImp[] = [];
  private SecondPlayerCells : CellImp[] = [];

  private lastPlayer : Player;


  // Take a possible group (can be a row/column/diagonal slash-backslash), then evaluate
  // if it has a winning row -> return true and abort further iterations 
  evaluateGroup(group: CellImp[]) : boolean{    
    var winningFlag = true;

    // intialize the OpponentsCell
    var PlayerCellsOpponents : CellImp[] = [];
    if (group[0].state == Player.PLAYER_ONE){
      PlayerCellsOpponents = this.SecondPlayerCells;
    } else if (group[0].state == Player.PLAYER_TWO){
      PlayerCellsOpponents = this.FirstPlayerCells;
    }
    
    
    // Check if the group has enough cell (stone) -> if it has enough -> Iterate through its cell to evaluate
    if (group.length >= this.WIN_CONDITION){
      
      // var startIndex = 0;
      var winningRow : CellImp[] = [];
      // Loop through each cell in that group
      for (var i = 0; i < group.length+1; i++){
	winningRow.push(group[i]);	
	try { if (group[i+1].column != group[i].column){ winningRow = []; }}
	catch{ // reach the end of the column 
	}	  
	// Check length of winning Row to see if it is bigger/equal to the winning condition
	if (winningRow.length >= this.WIN_CONDITION){
	  // Check the two boundaries of this row:
	  // get the two outer-most cell of this winning row
	  var first_cell = winningRow[0]; var last_cell = winningRow[winningRow.length-1];
	    // Coutner to count the boundaries
	  var boundary_counter = 0;
	  for (var i = 0; i < PlayerCellsOpponents.length; i++){
	    if (PlayerCellsOpponents[i].row == first_cell.row && PlayerCellsOpponents[i].column == (first_cell.column-1)){
	      // Detect one boundaries
	      boundary_counter+=1;
	      }
	    
	    if (this.SecondPlayerCells[i].row == first_cell.row && this.SecondPlayerCells[i].column == (last_cell.column+1)){
	      // Detect one boundaries
	      boundary_counter+=1;
	    }
	    if (boundary_counter == 2){
	      // If two boundaries are found -> The winning row is blocked
	      winningFlag = false;
	      break;
	    }
	  }
	  // End of checking
	}else{
	  winningFlag = false;
	}
	
	if (winningFlag == true){  return true   }
      }
    }
    
  }
}

  // This function take all input of one player's move and evaluate his winning state
  assertPlayerTable(PlayerCells : CellImp[], PlayerCellsOpponents : CellImp[]) : boolean{
    console.log("Cells:")
    var PlayerType : Player = PlayerCells[0].state;
    
    // Sorting through the array based on row
    var arr = PlayerCells.sort((a: CellImp,b: CellImp) => a.row - b.row );
    // divide this player's cell into groups based on row
    var groups = _.groupBy(arr, 'row');

    console.log(groups)

    var winningFlag = true;

    // Interate through all key in the dictionary:
    for (let key in groups){
      // Initialize the winning flag
      winningFlag = this.evaluateGroup(groups[key])
      
    }
    
  }








  addCell(cell: CellImp) : number{
    if (cell.state == Player.PLAYER_ONE){
      this.FirstPlayerCells.push(cell);

      // Evaluate
      this.lastPlayer = Player.PLAYER_ONE;
      var winYet = this.assertPlayerTable(this.FirstPlayerCells, this.SecondPlayerCells);
      if (winYet == true){return 1;}
    }
    else if (cell.state == Player.PLAYER_TWO){
      this.SecondPlayerCells.push(cell);

      // Evaluate
      this.lastPlayer = Player.PLAYER_TWO;
      var winYet = this.assertPlayerTable(this.SecondPlayerCells, this.FirstPlayerCells);
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
