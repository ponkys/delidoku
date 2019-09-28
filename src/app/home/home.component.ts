import { Component } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { TRAILERS } from './trailers-const';
import { VideoBackgroundService } from 'app/video-background.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentVideo: SafeResourceUrl;
  height = 100;
  isHomeComponent: false;
  mobileScreen = true;
  showVideo: boolean;
  width = 100;
  private trailers = TRAILERS;

  constructor(private winRef: WindowRefService, private videoBackgroundService: VideoBackgroundService) {
    if (this.winRef.nativeWindow.innerWidth > 768) {
      this.mobileScreen = false;
    }
  }

  onClickVideo() {
    this.currentVideo = this.videoBackgroundService.sanitise(this.trailers.official);
    this.showVideo = true;
  }

  onCloseVideo() {
    this.showVideo = false;
    this.currentVideo = null;
  }

  facebookNavigate() {
    window.open('https://www.facebook.com/delidokubp/', '_blank');
  }
}
