import { Component, OnInit } from '@angular/core';
import { Letter } from '../alphabets/alphabets.component';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  public letters: Array<Letter> = [
    { letter: "Apple" },
    { letter: "Car" },
    { letter: "Boy" },
    { letter: "Computer" },
    { letter: "Chair" },
    { letter: "Window" },
    { letter: "Mobile" },

  ];

  public svoice: any;
  constructor() {

    this.svoice = window.speechSynthesis.getVoices()[0];

  }
  ngOnInit(): void {

  }
  public TextToSpeach(text: string) {
    //alert(text);
    let speech = new SpeechSynthesisUtterance();

    speech.lang = "en-US";
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = this.svoice;
    window.speechSynthesis.speak(speech);
  }
}

