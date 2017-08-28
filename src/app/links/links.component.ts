import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Links } from '../links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  links: string[] = Links.slice(1);

  constructor(private router: Router) {}

  onSelect(link: string) {
    this.router.navigate([`/${link}`]);
  }

}
