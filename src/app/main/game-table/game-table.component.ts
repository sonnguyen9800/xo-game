import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { Location } from '@angular/common';
import { OpponentType, MapSize } from '../../GameMode';
import { Router, ActivatedRoute } from '@angular/router';


import { CellImp } from '../cell/CellImp';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  
  public opponent: OpponentType;
  public mapsize: MapSize;
  
  public size :number = 0;
  
    
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

    this.size = this.getMapSize(this.mapsize);

    // Initialize GameState
    console.log(this.size);
    this.GameState = [];
    for(var i: number = 0; i < this.size; i++) {
      console.log(i);
      this.GameState[i] = [];
      for(var j: number = 0; j< this.size; j++) {
        this.GameState[i][j] = new CellImp(i,j);	      
      }
    }

    console.log(this.GameState)
            
  }

  // Get the values from params then generate map
  ngOnInit(): void {
 

    
    
  }

  getMapSize(mapsize : MapSize) : number{
    switch(mapsize){
      case(MapSize.Small):{
	return 5
      }
      case(MapSize.Medium):{
	return 6;
      }
      case(MapSize.Large):{
	return 8;
      }
      case(MapSize.VeryLarge):{
	return 10;
      }
      default: {
	// return based on medium size
	return 6;
      }	
    }
    
  }

  generateMap() : void{
    
  }

  selectCell(i: number, j: number){
    console.log("Cell ["+i+","+j+"] has been selected" ) 
  }
  
  goBack(): void {
    this.location.back();
  }
  
}
