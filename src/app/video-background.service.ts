import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable()
export class VideoBackgroundService {

  videoLinks: string[] = [
    'https://youtube.com/embed/CzpNOxSQO70?autoplay=1&loop=1&list=PL6a03kMVyfq6HDdnxGvJWU-YB3Bq9_10u',
    'https://www.youtube.com/embed/8xOpNYtTvWw?autoplay=1&list=PL6a03kMVyfq7cBTAj2ZtQWgDMSVAJaOwU',
    'https://www.youtube.com/embed/D15xEt3pw7U?autoplay=1&list=PL6a03kMVyfq49Avu66jPMAbvsrFZdMRkd',
    'https://www.youtube.com/embed/2DKUP-4-4jw?autoplay=1&list=PL6a03kMVyfq4IwhCtlbrn9p2de8IU4jBZ'
  ]
  dangerous: string;
  resourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  randomVideo(): SafeResourceUrl {
    let lenght;
    lenght = this.videoLinks.length;
    this.dangerous = this.videoLinks[this.getRandomIntInclusive(1, lenght) - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerous);
  }

  getRandomIntInclusive(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  sanitise(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

}
