import { Component, HostListener } from '@angular/core';
import { WindowRefService  } from './window-ref.service';
import { ActivatedRoute } from '@angular/router';

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
  removeOnWindowEvent = false

  constructor(private winRef: WindowRefService, private route: ActivatedRoute) {
    this.changePos = this.winRef.nativeWindow.innerHeight;
    this.route.url.subscribe(x => console.log(x));
    // if (this.route.url === 'app-films-2017') {
    //   this.isScrolled = true;
    //   return;
    // }
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

