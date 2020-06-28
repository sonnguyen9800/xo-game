import { Component, OnInit } from '@angular/core';
import { OpponentType, MapSize } from '../GameMode';
import { GameConfig } from '../game-config';
import {Howl } from 'howler';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  AllMode = OpponentType;
  AllMap = MapSize;

  // Data
  mode : OpponentType = this.AllMode.Player;
  size : MapSize = this.AllMap.Small;
  gameConfig: GameConfig = {
    Map: this.size,  
    Opponent: this.mode
  }
  
  // Declare sound object
  sound : Howl ;
  start_sound: Howl;
  background_soundtrack : Howl;

  
  
  constructor(){
 
  }

  ngOnInit(): void {
    this.sound = new Howl({
      src: ['../../assets/button-click.mp3'],
      html5 :true      
    });

    this.start_sound = new Howl({
      src: ['../../assets/start-button.mp3'],
      html5: true
    })

     this.background_soundtrack = new Howl({
       src: ['../../assets/background1.mp3'],
       loop: true,
      html5: true
    })
    // this.background_soundtrack.play()    
  }


  selectOpponent(type: OpponentType) :void {
    this.mode = type;
    this.sound.play();
  }

  selectMap(map: MapSize) :void {
    this.size = map;
    this.sound.play();
  }

  playGame(){
    this.start_sound.play();
    this.gameConfig.Map = this.size;
    this.gameConfig.Opponent = this.mode;
    console.log("Game: " + this.gameConfig.Opponent + "; Map Type: " + this.gameConfig.Map);
    
  }
}
