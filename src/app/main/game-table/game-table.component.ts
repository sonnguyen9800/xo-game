import { Component, OnInit, ViewChild, QueryList, ElementRef, ContentChildren, ViewChildren  } from '@angular/core';

import { Location } from '@angular/common';
import { OpponentType, MapSize } from '../../GameMode';
import { ActivatedRoute } from '@angular/router';


import { CellImp } from '../cell/CellImp';

import { Player } from '../../Player';
import {CellComponent } from '../cell/cell.component'
import {Howl } from 'howler';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent implements OnInit {

  back_sound : Howl;
  cell_marks : Howl[] = [];
  error_sound : Howl;
  
  
  
 @ViewChildren(CellComponent) allCells: QueryList<CellComponent>;
  // @ContentChildren('cell')  allCells: QueryList<CellComponent>;
  


  
  
  public opponent: OpponentType;
  public mapsize: MapSize;
  
  public size :number = 0;

  // Variable to determine the Player's Turn
  private CurrentPlayer : Player = Player.PLAYER_ONE;
  
    
  // Make Array 2d represent the state of the map (table).
  // Using CellImp as the class for object
  public GameState : CellImp[][];
   
  constructor(
    private activateRouter: ActivatedRoute,
    private location : Location) {

    // Get values from the url parameters
    this.activateRouter.paramMap.subscribe(params => {            
      this.opponent = params.get('opponent') as OpponentType;
      this.mapsize = params.get('size') as MapSize;      
      console.log("This Opponent" + this.opponent + this.mapsize);
    })

    // get the size (dimension of game map)
    this.size = this.getMapSize(this.mapsize);      
    console.log(this.GameState)
            
  }


  // Get the values from params then generate map
  ngOnInit(): void {
    // Create the map 2d GameState
    this.GameState = this.initializeGameState(this.size);        


    this.back_sound = new Howl({
      src: ['../../../assets/button-click.mp3'],
      html5 :true      
    });

    // Initialize the sound when marking cell
    var sounds = ['cell-mark1', 'cell-mark2', 'cell-mark3', 'cell-mark4', 'cell-mark5'];
    for (var i=0; i < sounds.length; i++){
      
      this.cell_marks[i] = new Howl({
	src: ['../../../assets/' +  sounds[i] + '.mp3'],	
	volume: 0.2,
	html5: true
      })

      // console.log(this.cell_marks[i]);
    }


    this.error_sound = new Howl({
      src: ['../../../assets/error.mp3'],
      html5 :true      
    });

  }
  


  playRandomSound() :void{
    var sounds = ['cell-mark1', 'cell-mark2', 'cell-mark3', 'cell-mark4', 'cell-mark5'];

    var soundFile = Math.floor(Math.random() * sounds.length);
    console.log("ABout to play" + typeof(this.cell_marks))
    this.cell_marks[soundFile].play();

    

  }

  getMapSize(mapsize : MapSize) : number{
    switch(mapsize){
      case(MapSize.Small):{
	return 8
      }
      case(MapSize.Medium):{
	return 10;
      }
      case(MapSize.Large):{
	return 12;
      }
      case(MapSize.VeryLarge):{
	return 14;
      }
      default: {
	// return based on medium size
	return 6;
      }	
    }
    
  }

  initializeGameState(size: number) : CellImp[][]{
     // Initialize GameState
    let newGameState : CellImp[][] = [];    
    for(var i: number = 0; i < size; i++) {
      newGameState[i] = [];
      for(var j: number = 0; j<size; j++) {
        newGameState[i][j] = new CellImp(i,j);	      
      }
    }
    return newGameState;
  }



  selectCell(i: number, j: number){
    //console.log("Cell ["+i+","+j+"] has been selected" );
    var selectedCell : CellComponent =  this.findCorrectCell(i, j);
    //    console.log(selectedCell)
    // Make the decision
    if (this.CurrentPlayer == Player.PLAYER_ONE && this.GameState[i][j].state == 0 ){
      this.GameState[i][j].state = this.CurrentPlayer;

      this.playRandomSound()
      selectedCell.changeState(this.CurrentPlayer);
      this.CurrentPlayer = Player.PLAYER_TWO;
            
    }else if (this.CurrentPlayer == Player.PLAYER_TWO && this.GameState[i][j].state == 0 ){
      this.GameState[i][j].state = this.CurrentPlayer;

      this.playRandomSound()
      selectedCell.changeState(this.CurrentPlayer);
      this.CurrentPlayer = Player.PLAYER_ONE;

      
    }else{
      // Nothing happend
      //console.log("INVALID MOVE");
      this.error_sound.play();
      
    }


//    console.log(this.GameState)
  }


  findCorrectCell(i: number, j: number) : CellComponent{    
    for (var cell of this.allCells.toArray()){
      if (cell.row == i && cell.column == j){
	return cell;	
      }
    }    
    return null;
  }
  
  
  ngAfterViewInit() {
    //this.allCells.toArray().forEach(instance => console.log(instance))    
  }
  
  goBack(): void {
    this.location.back();
    this.back_sound.play();
  }

}
