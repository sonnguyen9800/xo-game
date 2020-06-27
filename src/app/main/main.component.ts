import { Component, OnInit } from '@angular/core';
import { OpponentType, MapSize } from '../GameMode';

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
  mode = this.AllMode.Player;
  size = this.AllMap.Small;

  // Declare sound object
  sound : Howl ;
  start_sound: Howl;

  
  
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
  }
}
