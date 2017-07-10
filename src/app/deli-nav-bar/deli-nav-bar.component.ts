import { Component, OnInit } from '@angular/core';
import { Links } from '../links';

@Component({
  selector: 'app-deli-nav-bar',
  templateUrl: './deli-nav-bar.component.html',
  styleUrls: ['./deli-nav-bar.component.css']
})
export class DeliNavBarComponent implements OnInit {

  links: string[] = Links;
  showNavBar: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openNavBar() {
    this.showNavBar = true;
    console.log(this.showNavBar);
  }

  closeNavBar() {
    this.showNavBar = false;
  }

}
