import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css'],
})
export class PoemsComponent implements OnInit {
  constructor(public sanitizer: DomSanitizer) {}
  public letters: Array<any> = [
    {
      title: 'Wheel on the Bus',
      URL: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/e_04ZrNroTo'
      ),
    },
    {
      title: 'Bismillah',
      URL: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/pH-aMl4OHTQ'
      ),
    },
    {
      title: 'Baby Shark',
      URL: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/020g-0hhCAU'
      ),
    },
    {
      title: 'Meow Meow Billi Karti',
      URL: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/JpA6KCHK5tM'
      ),
    },
    {
      title: 'Baa Baa Black Sheep',
      URL: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/i7ygKQunfmE'
      ),
    },
    {
      title: 'Twinkle Twinkle Little Star',
      URL: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/RciE68Q7PCA'
      ),
    },
    {
      title: 'Johny Johny',
      URL: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/RLMJmJ_IdnQ'
      ),
    },
    {
      title: 'Main Tota',
      URL: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/Kj6ZzR0LKpg'
      ),
    },
  ];

  public svoice: any;
  ngOnInit(): void {}
}
