import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '../links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  links: any[] = Routes;

  constructor(private router: Router) {}

  onSelect(link: string) {
    this.router.navigate([`/${link}`]);
  }

}
