import { Component, OnInit } from '@angular/core';
import { OpponentType, MapSize } from '../GameMode';
import { GameConfig } from '../game-config';
import {Howl } from 'howler';
import {Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  AllMode = OpponentType;
  AllMap = MapSize;

  // Data
  mode : OpponentType = OpponentType.Player;
  size : MapSize = MapSize.Small;
  gameConfig: GameConfig = {
    Map: this.size,  
    Opponent: this.mode
  }
  
  // Declare sound object
  sound : Howl ;
  start_sound: Howl;
  background_soundtrack : Howl;

  
  
  constructor(private router: Router){
 
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
    this.router.navigate(
      ['game', this.gameConfig.Opponent, this.gameConfig.Map]
    )
    
  }

  toAboutPage(){
    this.start_sound.play();
    this.router.navigateByUrl('/about');
  }
}
