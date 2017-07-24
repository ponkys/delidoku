import { Component} from '@angular/core';
import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  public mobileScreen = true;

  constructor(private winRef: WindowRefService) {
    if (winRef.nativeWindow.outerWidth > 768) {
      this.mobileScreen = false;
    }
  }

}
