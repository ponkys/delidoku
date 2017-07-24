import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowRefService  } from './window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isHomeComponent = true;

  constructor(private route: ActivatedRoute, router: Router, private winRef: WindowRefService) {
  }

  ngDoCheck() {
    this.isHomeComponent =  (this.winRef.nativeWindow.location.href.substr(-4) === 'home') ? true : false;
  }
}

