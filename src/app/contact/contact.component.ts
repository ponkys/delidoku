import { Component } from '@angular/core';
import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public mobileScreen = true;

  constructor(private winRef: WindowRefService) {
    if (winRef.nativeWindow.outerWidth > 768) {
      this.mobileScreen = false;
    }
  }

}
