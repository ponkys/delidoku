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
    const url = 'https://firebasestorage.googleapis.com/v0/b/delidoku-b2ece.appspot.com/o/CERVANTES_VECTORES_FEHER.pdf?alt=media&token=36bea49b-ded8-4f53-8c94-fa96feaebd97'

    window.open(url, '_blank');
  }

}
