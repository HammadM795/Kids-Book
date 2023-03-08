import { Component, OnInit } from '@angular/core';
import { Letter } from '../alphabets/alphabets.component';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css'],
})
export class ObjectsComponent implements OnInit {
  public letters: Array<Letter> = [
    { letter: 'Apple', image: './assets/Images/Objects/apple.jpg' },
    // { letter: 'Book', image: './assets/Images/Objects/book.jpg' },
    // { letter: 'Boy', image: './assets/Images/Objects/boy.jpg' },
    { letter: 'Ball', image: './assets/Images/Objects/ball.jpg' },
    { letter: 'Cat', image: './assets/Images/Objects/cat.jpg' },
    // { letter: 'Chair', image: './assets/Images/Objects/chair.jpg' },
    // { letter: 'Computer', image: './assets/Images/Objects/computer.jpg' },
    // { letter: 'Car', image: './assets/Images/Objects/car.jpg' },
    { letter: 'Dog', image: './assets/Images/Objects/dog.jpg' },
    { letter: 'Elephant', image: './assets/Images/Objects/elephant.jpg' },
    { letter: 'Flag', image: './assets/Images/Objects/flag.jpg' },
    { letter: 'Goat', image: './assets/Images/Objects/goat.jpg' },
    { letter: 'Horse', image: './assets/Images/Objects/horse.jpg' },
    { letter: 'Ink', image: './assets/Images/Objects/ink.jpg' },
    { letter: 'Jug', image: './assets/Images/Objects/jug.jpg' },
    { letter: 'Kite', image: './assets/Images/Objects/kite.jpg' },
    { letter: 'Lion', image: './assets/Images/Objects/lion.jpg' },
    { letter: 'Monkey', image: './assets/Images/Objects/monkey.jpg' },
    // { letter: 'Mobile', image: './assets/Images/Objects/mobile.jpg' },
    { letter: 'Notepad', image: './assets/Images/Objects/notepad.jpg' },
    { letter: 'Orange', image: './assets/Images/Objects/orange.jpg' },
    { letter: 'Parrot', image: './assets/Images/Objects/parrot.jpg' },
    { letter: 'Queen', image: './assets/Images/Objects/queen.jpg' },
    { letter: 'Rope', image: './assets/Images/Objects/rope.jpg' },
    { letter: 'Snail', image: './assets/Images/Objects/snail.jpg' },
    { letter: 'Tea', image: './assets/Images/Objects/tea.jpg' },
    { letter: 'Snail', image: './assets/Images/Objects/snail.jpg' },
    { letter: 'Van', image: './assets/Images/Objects/van.jpg' },
    { letter: 'Window', image: './assets/Images/Objects/window.jpg' },
    { letter: 'Xray', image: './assets/Images/Objects/xray.jpg' },
    { letter: 'Yak', image: './assets/Images/Objects/snail.jpg' },
    { letter: 'Zebra', image: './assets/Images/Objects/Zebra.jpg' },
  ];

  public svoice: any;
  constructor() {
    this.svoice = window.speechSynthesis.getVoices()[1];
  }
  ngOnInit(): void {}
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
