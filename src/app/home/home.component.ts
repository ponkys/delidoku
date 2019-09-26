import { Component } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { TRAILERS } from './trailers-const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentVideo: string;
  height = 100;
  isHomeComponent: false;
  mobileScreen = true;
  showVideo: boolean;
  trailers = TRAILERS;
  width = 100;

  constructor(private winRef: WindowRefService) {
    if (this.winRef.nativeWindow.innerWidth > 768) {
      this.mobileScreen = false;
    }
  }

  onClickVideo(video: string) {
    this.currentVideo = video;
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
