import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  @Input() video: string;
  @Input() gif: string;

  constructor() { }

  ngOnInit() {
  }

}
