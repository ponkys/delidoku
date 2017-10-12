import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  download() {
    // tslint:disable-next-line:max-line-length
    const url = 'https://firebasestorage.googleapis.com/v0/b/delidoku-b2ece.appspot.com/o/CERVANTES_VECTORES_FEHER.pdf?alt=media&token=36bea49b-ded8-4f53-8c94-fa96feaebd97'
    // download didn't work
    // this.http.get(url, {responseType: 'blob'}).subscribe( res => {
    //   const blob = new Blob([res], { type: 'application/pdf' })
    //   const filename = 'test.pdf';
    //   console.log(blob);
    // }, err => console.log(err.message));
    const strWindowFeatures = 'location=yes,height=570,width=520,scrollbars=yes,status=yes';
    window.open(url, '_blank', strWindowFeatures);
  }

}
