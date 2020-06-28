import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { OpponentType, MapSize } from '../../GameMode';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  
  public opponent: OpponentType;
  public mapsize: MapSize;
  public size :number = 0;

  Arr = Array;
  
  
  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute ) {
    

    
  }

  // Get the values from params then generate map
  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(params => {            
      this.opponent = params.get('opponent') as OpponentType;
      this.mapsize = params.get('size') as MapSize;      
      console.log("This Opponent" + this.opponent + this.mapsize);
    })

    switch(this.mapsize){
      case(MapSize.Small):{
	this.size = 5;
	break;
      }
      case(MapSize.Medium):{
	this.size = 6;
	break;
      }
      case(MapSize.Large):{
	this.size = 8;
	break;
      }
      case(MapSize.VeryLarge):{
	this.size = 10;
	break;
      }
      default: {
	this.size = 6;
      }	
    }
    
  }

  generateMap() : void{
    
  }
  
}
