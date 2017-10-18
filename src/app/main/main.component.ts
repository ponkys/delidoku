import { Component, OnInit, HostListener } from '@angular/core';
import { WindowRefService } from 'app/window-ref.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

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
