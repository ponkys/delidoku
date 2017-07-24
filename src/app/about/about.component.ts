import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('contentWrapper')
  contentWrapper: ElementRef

  public mobileScreen = true;

    constructor(private winRef: WindowRefService) {
      if (winRef.nativeWindow.outerWidth > 768) {
        this.mobileScreen = false;
      }
    }

  ngOnInit() {
    this.contentWrapper.nativeElement.scrollTop = 0;
  }

}
