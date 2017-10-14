import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  download() {
    // tslint:disable-next-line:max-line-length
    const url = 'https://firebasestorage.googleapis.com/v0/b/delidoku-b2ece.appspot.com/o/DE%CC%81LI-DOKU-Programme.pdf?alt=media&token=c011e86a-4c97-482e-a36f-602bb3975f0f'

    window.open(url, '_blank');
  }

}
