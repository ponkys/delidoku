import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  videoLinks = [
    'https://youtube.com/embed/CzpNOxSQO70?autoplay=1&loop=1&list=PL6a03kMVyfq6HDdnxGvJWU-YB3Bq9_10u',
    'https://www.youtube.com/embed/8xOpNYtTvWw?autoplay=1&list=PL6a03kMVyfq7cBTAj2ZtQWgDMSVAJaOwU'
  ]
  dangerous: string;
  resourceUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

  randomVideo (): SafeResourceUrl {
    let lenght;
    lenght = this.videoLinks.length;
    this.dangerous = this.videoLinks[this.getRandomIntInclusive(1, lenght) - 1];
    this.resourceUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerous);
    console.log(this.resourceUrl);
    return this.resourceUrl;
  }

  getRandomIntInclusive(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
