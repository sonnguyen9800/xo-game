import { Component, OnInit } from '@angular/core';
import { OpponentType, MapSize } from '../GameMode';
import { GameConfig } from '../game-config';
import {Router } from '@angular/router';
import SoundManager from '../SoundManager';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // Declare sound object

  public SoundManager : SoundManager = new SoundManager();

  // Data for html
  AllMode = OpponentType;
  AllMap = MapSize;

  // Data
  mode : OpponentType = OpponentType.Player;
  size : MapSize = MapSize.Small;
  gameConfig: GameConfig = {
    Map: this.size,  
    Opponent: this.mode
  }
  

  
  
  constructor(private router: Router){
 
  }

  ngOnInit(): void {
    
  }


  selectOpponent(type: OpponentType) :void {
    this.SoundManager.playButtonSound();
    this.mode = type;
  }

  selectMap(map: MapSize) :void {

    this.SoundManager.playButtonSound();
    this.size = map;
  }

  playGame(){
    //Play Sound First
    this.SoundManager.playStartSound();

    // Set the GameOptions(Config)
    this.gameConfig.Map = this.size;
    this.gameConfig.Opponent = this.mode;
    //console.log("Game: " + this.gameConfig.Opponent + "; Map Type: " + this.gameConfig.Map);

    this.router.navigate(
      ['game', this.gameConfig.Opponent, this.gameConfig.Map]
    )
    
  }

  toAboutPage(){
    this.router.navigateByUrl('/about');
  }
}
