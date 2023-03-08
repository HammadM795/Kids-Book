import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.css'],
})
export class AlphabetsComponent implements OnInit {
  public letters: Array<Letter> = [
    // { letter: "A", image: "./assets/images/letterA.png", speaktext: "A, A for Apple" },
    { letter: 'A', image: './assets/Images/Alphabets/letterA.jpg' },
    { letter: 'B', image: './assets/Images/Alphabets/letterB.jpg' },
    { letter: 'C', image: './assets/Images/Alphabets/letterC.jpg' },
    { letter: 'D', image: './assets/Images/Alphabets/letterD.jpg' },
    { letter: 'E', image: './assets/Images/Alphabets/letterE.jpg' },
    { letter: 'F', image: './assets/Images/Alphabets/letterF.jpg' },
    { letter: 'G', image: './assets/Images/Alphabets/letterG.jpg' },
    { letter: 'H', image: './assets/Images/Alphabets/letterH.jpg' },
    { letter: 'I', image: './assets/Images/Alphabets/letterI.jpg' },
    { letter: 'J', image: './assets/Images/Alphabets/letterJ.jpg' },
    { letter: 'K', image: './assets/Images/Alphabets/letterK.jpg' },
    { letter: 'L', image: './assets/Images/Alphabets/letterL.jpg' },
    { letter: 'M', image: './assets/Images/Alphabets/letterM.jpg' },
    { letter: 'N', image: './assets/Images/Alphabets/letterN.jpg' },
    { letter: 'O', image: './assets/Images/Alphabets/letterO.jpg' },
    { letter: 'P', image: './assets/Images/Alphabets/letterP.jpg' },
    { letter: 'Q', image: './assets/Images/Alphabets/letterQ.jpg' },
    { letter: 'R', image: './assets/Images/Alphabets/letterR.jpg' },
    { letter: 'S', image: './assets/Images/Alphabets/letterS.jpg' },
    { letter: 'T', image: './assets/Images/Alphabets/letterT.jpg' },
    { letter: 'U', image: './assets/Images/Alphabets/letterU.jpg' },
    { letter: 'V', image: './assets/Images/Alphabets/letterV.jpg' },
    { letter: 'W', image: './assets/Images/Alphabets/letterW.jpg' },
    { letter: 'X', image: './assets/Images/Alphabets/letterX.jpg' },
    { letter: 'Y', image: './assets/Images/Alphabets/letterY.jpg' },
    { letter: 'Z', image: './assets/Images/Alphabets/letterZ.jpg' },
  ];

  public svoice: any;
  constructor() {
    this.svoice = window.speechSynthesis.getVoices()[1];
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  public TextToSpeach(text: string) {
    //alert(text);
    let speech = new SpeechSynthesisUtterance();

    speech.lang = 'en-US';
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = this.svoice;
    window.speechSynthesis.speak(speech);
  }
}
export class Letter {
  letter: string;
  image?: any;
  speaktext?: any;
  constructor() {
    this.letter = '';
    this.image = './assets/Images/letterA.jpg';
  }
}
