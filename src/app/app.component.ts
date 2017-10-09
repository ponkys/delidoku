import { Component, HostListener } from '@angular/core';
import { WindowRefService  } from './window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 0;

  constructor(private winRef: WindowRefService) {
    this.changePos = this.winRef.nativeWindow.innerHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos ) {
      this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }


}

