import { Component, OnInit } from '@angular/core';
import { VideoBackgroundService } from '../video-background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private video;

  constructor (private videoBackgroundService: VideoBackgroundService) {}

  ngOnInit() {
    this.video = this.videoBackgroundService.randomVideo()
  }

}
