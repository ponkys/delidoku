import { Component, OnInit } from '@angular/core';
import { VideoBackgroundService } from '../video-background.service';
import { WindowRefService } from '../window-ref.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public video;
  public mobileScreen = true;
  public isHomeComponent: false;

  constructor (
    private videoBackgroundService: VideoBackgroundService,
    private winRef: WindowRefService) {
    if (this.winRef.nativeWindow.innerWidth > 768) {
      this.mobileScreen = false;
    }
  }

  ngOnInit() {
    this.video = this.videoBackgroundService.randomVideo()
  }

}
