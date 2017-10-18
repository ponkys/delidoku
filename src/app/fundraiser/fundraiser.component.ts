import { Component, OnInit } from '@angular/core';

import { Films } from '../films/films';
import { VideoBackgroundService } from 'app/video-background.service';

@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css']
})
export class FundraiserComponent implements OnInit {

  trailerSafe;
  docsFile = 'https://docs.google.com/spreadsheets/d/1j0uORL97KK8gLIMAQIHfmw8XohHxNuISseAdXNXzrJE/edit?usp=sharing';

  constructor(private videoBackgroundService: VideoBackgroundService) {}

  ngOnInit() {
    this.trailerSafe = this.videoBackgroundService.sanitise('https://www.youtube.com/embed/HA6yisytSDA')
  }

  openLink() {
    window.open(this.docsFile, '_blank');
  }

}
