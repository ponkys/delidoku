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
    const url = 'https://firebasestorage.googleapis.com/v0/b/delidoku-b2ece.appspot.com/o/Deli_Doku_Programme.pdf?alt=media&token=7cd854c5-85ab-4604-9416-f98884ed0ca4'

    window.open(url, '_blank');
  }

}
