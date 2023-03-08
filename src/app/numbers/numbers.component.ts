import { Component, OnInit } from '@angular/core';
// import { Letter } from '../alphabets/alphabets.component';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  public numbers: Array<Number> = [
    // { letter: "A", image: "./assets/images/letterA.png", speaktext: "A, A for Apple" },
    { number: '1', image: './assets/Images/Numbers/1.jpg' },
    { number: '2', image: './assets/Images/Numbers/2.jpg' },
    { number: '3', image: './assets/Images/Numbers/3.jpg' },
    { number: '4', image: './assets/Images/Numbers/4.jpg' },
    { number: '5', image: './assets/Images/Numbers/5.jpg' },
    { number: '6', image: './assets/Images/Numbers/6.jpg' },
    { number: '7', image: './assets/Images/Numbers/7.jpg' },
    { number: '8', image: './assets/Images/Numbers/8.jpg' },
    { number: '9', image: './assets/Images/Numbers/9.jpg' },
    { number: '10', image: './assets/Images/Numbers/10.jpg' },
    { number: '11', image: './assets/Images/Numbers/11.jpg' },
    { number: '12', image: './assets/Images/Numbers/12.jpg' },
    { number: '13', image: './assets/Images/Numbers/13.jpg' },
    { number: '14', image: './assets/Images/Numbers/14.jpg' },
    { number: '15', image: './assets/Images/Numbers/15.jpg' },
    { number: '16', image: './assets/Images/Numbers/16.jpg' },
    { number: '17', image: './assets/Images/Numbers/17.jpg' },
    { number: '18', image: './assets/Images/Numbers/18.jpg' },
    { number: '19', image: './assets/Images/Numbers/19.jpg' },
    { number: '20', image: './assets/Images/Numbers/20.jpg' },
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
export class Number {
  number!: string;
  image?: any;
  speaktext?: any;
  constructor() {
    this.number = '1';
    this.image = './assets/Images/Numbers/1.jpg';
  }
}

//   public svoice: any;
//   constructor() {

//     this.svoice = window.speechSynthesis.getVoices()[1];
//     var i = 1;
//     this.letters = new Array<Letter>(20);
//     while (i <= 20) {
//       var letter = new Letter();
//       letter.letter = i.toString();
//       this.letters[i - 1] = letter;
//       i++;
//     }
//   }
//   public TextToSpeach(text: string) {
//     //alert(text);
//     let speech = new SpeechSynthesisUtterance();

//     speech.lang = "en-US";
//     speech.text = text;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     speech.voice = this.svoice;
//     window.speechSynthesis.speak(speech);
// }
