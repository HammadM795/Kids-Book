import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  public letters: Array<Letter> = [
    // { letter: "A", image: "./assets/images/letterA.png", speaktext: "A, A for Apple" },
    {
      letter: 'A',
      image: './assets/Images/Animals/A-for-Alligator.jpg',
      speaktext: ' A for Alligator',
    },
    {
      letter: 'B',
      image: './assets/Images/Animals/B-for-Bee.jpg',
      speaktext: ' B for Bee',
    },
    {
      letter: 'C',
      image: './assets/Images/Animals/C-for-Cat.jpg',
      speaktext: ' C for Cat',
    },
    {
      letter: 'D',
      image: './assets/Images/Animals/D-for-Dog.jpg',
      speaktext: ' D for Dog',
    },
    {
      letter: 'E',
      image: './assets/Images/Animals/E-for-Elephant.jpg',
      speaktext: ' E for Elephant',
    },
    {
      letter: 'F',
      image: './assets/Images/Animals/F-for-Fox.jpg',
      speaktext: ' F for Fox',
    },
    {
      letter: 'G',
      image: './assets/Images/Animals/G-for-Giraffe.jpg',
      speaktext: ' G for Giraffe',
    },
    {
      letter: 'H',
      image: './assets/Images/Animals/H-for-Hippo.jpg',
      speaktext: ' H for Hippo',
    },
    {
      letter: 'I',
      image: './assets/Images/Animals/I-for-Iguana.jpg',
      speaktext: ' I for Iguana',
    },
    {
      letter: 'J',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'K',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'L',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'M',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'N',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'O',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'P',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'Q',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'R',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'S',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'T',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'U',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'V',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'W',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'X',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'Y',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'Z',
      image: './assets/Images/Animals/Z-for-Zebra.jpg',
      speaktext: ' Z for Zebra',
    },
  ];

  public svoice: any;
  constructor() {
    this.svoice = window.speechSynthesis.getVoices()[1];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
