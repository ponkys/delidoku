import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Links } from '../links';
import { WindowRefService } from '../window-ref.service';
import { ScrollimateService } from 'ng2-scrollimate';
import { trigger, animate, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-deli-nav-bar',
  templateUrl: './deli-nav-bar.component.html',
  styleUrls: ['./deli-nav-bar.component.css'],
  animations: [
  ]
})
export class DeliNavBarComponent {

  links: string[] = Links;
  showNavBar: Boolean = false;
  bigScreen: Boolean = false;

  constructor(
      private router: Router,
      private winRef: WindowRefService) {
        if (winRef.nativeWindow.outerWidth > 768) {
          this.bigScreen = true;
          this.showNavBar = true;
        }
      }

  onSelect(link: string) {
    this.router.navigate([`/${link}`]);
    if (this.bigScreen === false) {
      this.closeNavBar()
    }
  }

  openNavBar() {
    this.showNavBar = true;
  }

  closeNavBar() {
    if (this.winRef.nativeWindow.outerWidth < 768) {
      this.showNavBar = false;
    }
  }

}
