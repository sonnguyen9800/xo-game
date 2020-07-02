import {Howl } from 'howler';


export default class SoundManager {
 


  private startButtonSound: Howl;
  private buttonSound: Howl;
  private cellSelect : Howl[]= [];
  private errorSound : Howl;
  private sounds = ['cell-mark1', 'cell-mark2', 'cell-mark3', 'cell-mark4', 'cell-mark5'];
  
  //constructor aka: initialize sound
  constructor( ){
     this.buttonSound = new Howl({
      src: ['../assets/button-click.mp3'],
       volume: 0.1,
       html5 :true      
    });

    this.startButtonSound = new Howl({
      src: ['../assets/start-button.mp3'],
      volume: 0.2,
      html5: true
    })

    this.errorSound = new Howl({
      src: ['../assets/error.mp3'],
      volume: 0.1,
      html5 :true      
    });


    // Initialize the sound when marking cell
    for (var i=0; i < this.sounds.length; i++){      
      this.cellSelect[i] = new Howl({
	src: ['../assets/' +  this.sounds[i] + '.mp3'],	
	volume: 0.2,
	html5: true
      })
    }

  }

  playButtonSound(): void{
      this.buttonSound.play();
  }

  playStartSound(): void{
    this.startButtonSound.play();
  }

  playErrorSound(): void{
    this.errorSound.play();
  }
  playRandomSound() :void{    
    var soundFile = Math.floor(Math.random() * this.sounds.length);
    this.cellSelect[soundFile].play();      
  }

  
  
}
