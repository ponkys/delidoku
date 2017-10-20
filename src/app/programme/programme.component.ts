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
    const url = 'https://firebasestorage.googleapis.com/v0/b/delidoku-b2ece.appspot.com/o/DE%CC%81LI-DOKU%20programme.pdf?alt=media&token=74e95466-4afa-4a4c-b4d9-6e979ddb6820'

    window.open(url, '_blank');
  }

}
