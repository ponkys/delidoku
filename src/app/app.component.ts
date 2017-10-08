import { Component } from '@angular/core';
import { WindowRefService  } from './window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private winRef: WindowRefService) {
  }

}

