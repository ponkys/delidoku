import { Component, OnInit } from '@angular/core';
import { VideoBackgroundService } from './video-background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private video;

  constructor (private videoBackgroundService: VideoBackgroundService) {}

  ngOnInit() {
    this.video = this.videoBackgroundService.randomVideo()
  }
}
