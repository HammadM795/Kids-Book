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
      letter: 'Alligator',
      image: './assets/Images/Animals/A-for-Alligator.jpg',
      speaktext: ' A for Alligator',
    },
    {
      letter: 'Bee',
      image: './assets/Images/Animals/B-for-Bee.jpg',
      speaktext: ' B for Bee',
    },
    {
      letter: 'Cat',
      image: './assets/Images/Animals/C-for-Cat.jpg',
      speaktext: ' C for Cat',
    },
    {
      letter: 'Dog',
      image: './assets/Images/Animals/D-for-Dog.jpg',
      speaktext: ' D for Dog',
    },
    {
      letter: 'Elephant',
      image: './assets/Images/Animals/E-for-Elephant.jpg',
      speaktext: ' E for Elephant',
    },
    {
      letter: 'Fox',
      image: './assets/Images/Animals/F-for-Fox.jpg',
      speaktext: ' F for Fox',
    },
    {
      letter: 'Giraffe',
      image: './assets/Images/Animals/G-for-Giraffe.jpg',
      speaktext: ' G for Giraffe',
    },
    {
      letter: 'Hippo',
      image: './assets/Images/Animals/H-for-Hippo.jpg',
      speaktext: ' H for Hippo',
    },
    {
      letter: 'Iguana',
      image: './assets/Images/Animals/I-for-Iguana.jpg',
      speaktext: ' I for Iguana',
    },
    {
      letter: 'Jelly Fish',
      image: './assets/Images/Animals/J-for-Jellyfish.jpg',
      speaktext: ' J for Jelly Fish',
    },
    {
      letter: 'Kangroo',
      image: './assets/Images/Animals/K-for-Kangroo.jpg',
      speaktext: ' K for Kangroo',
    },
    {
      letter: 'Lion',
      image: './assets/Images/Animals/L-for-Lion.jpg',
      speaktext: ' L for Lion',
    },
    {
      letter: 'Monkey',
      image: './assets/Images/Animals/M-for-Monkey.jpg',
      speaktext: 'M for Monkey',
    },
    {
      letter: 'Nightingale',
      image: './assets/Images/Animals/N-for-Nightingale.jpg',
      speaktext: ' N for Nightingale',
    },
    {
      letter: 'Owl',
      image: './assets/Images/Animals/O-for-Owl.jpg',
      speaktext: ' O for Owl',
    },
    {
      letter: 'Penguin',
      image: './assets/Images/Animals/P-for-Penguin.jpg',
      speaktext: 'P for Penguin',
    },
    {
      letter: 'Quail',
      image: './assets/Images/Animals/Q-for-Quail.jpg',
      speaktext: ' Q for Quail',
    },
    {
      letter: 'Raccoon',
      image: './assets/Images/Animals/R-for-Raccoon.jpg',
      speaktext: ' R for Raccoon',
    },
    {
      letter: 'Seal',
      image: './assets/Images/Animals/S-for-Seal.jpg',
      speaktext: 'S for Seal',
    },
    {
      letter: 'Turtle',
      image: './assets/Images/Animals/T-for-Turtle.jpg',
      speaktext: ' T for Turtle',
    },
    {
      letter: 'Unicorn',
      image: './assets/Images/Animals/U-for-Unicorn.jpg',
      speaktext: ' U for Unicorn',
    },
    {
      letter: 'Vulture',
      image: './assets/Images/Animals/V-for-Vulture.jpg',
      speaktext: ' V for Vulture',
    },
    {
      letter: 'Whale',
      image: './assets/Images/Animals/W-for-Whale.jpg',
      speaktext: ' W for Whale',
    },
    {
      letter: 'X-Ray Fish',
      image: './assets/Images/Animals/X-for-X-RayFish.jpg',
      speaktext: ' X for X Ray Fish',
    },
    {
      letter: 'Yak',
      image: './assets/Images/Animals/Y-for-Yak.jpg',
      speaktext: ' Y for Yak',
    },
    {
      letter: 'Zebra',
      image: './assets/Images/Animals/Z-for-Zebra.jpg',
      speaktext: ' Z for Zebra',
    },
  ];

  public svoice: any;
  constructor() {
    this.svoice = window.speechSynthesis.getVoices()[0];
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
