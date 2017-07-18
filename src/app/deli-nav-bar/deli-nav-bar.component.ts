import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Links } from '../links';

@Component({
  selector: 'app-deli-nav-bar',
  templateUrl: './deli-nav-bar.component.html',
  styleUrls: ['./deli-nav-bar.component.css']
})
export class DeliNavBarComponent implements OnInit {

  links: string[] = Links;
  showNavBar: Boolean = false;

  constructor( private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    // read route
    // this.route.paramMap.subscribe(p => console.log(p));
  }

  onSelect(link: string) {
    this.router.navigate([`/${link}`]);
    this.closeNavBar()
  }

  openNavBar() {
    this.showNavBar = true;
  }

  closeNavBar() {
    this.showNavBar = false;
  }

}
