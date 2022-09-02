import { Component, OnInit } from '@angular/core';
import { Letter } from '../alphabets/alphabets.component';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {
  title = 'Numbers';
  public letters: Array<Letter>;

  public svoice: any;
  constructor() {

    this.svoice = window.speechSynthesis.getVoices()[1];
    var i = 1;
    this.letters = new Array<Letter>(20);
    while (i <= 20) {
      var letter = new Letter();
      letter.letter = i.toString();
      this.letters[i - 1] = letter;
      i++;
    }
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
