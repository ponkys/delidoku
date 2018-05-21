import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  facebookNavigate() {
    window.open('https://www.facebook.com/delidokubp/', '_blank');
  }

}
