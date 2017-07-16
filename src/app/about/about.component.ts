import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('contentWrapper')
  contentWrapper: ElementRef

  constructor() { }

  ngOnInit() {
    this.contentWrapper.nativeElement.scrollTop = 0;
  }

}
