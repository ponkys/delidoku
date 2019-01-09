import { Component } from '@angular/core';
import { Sponsors } from './sponsors';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent {

  sponsors = Sponsors;

  facebookNavigate() {
    window.open('https://www.facebook.com/delidokubp/', '_blank');
  }

  onNkaClick() {
    window.open('http://www.nka.hu', '_blank');
  }

}
