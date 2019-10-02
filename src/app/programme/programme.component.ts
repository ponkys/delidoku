import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  download() {
    // when programme is in hu and en
    // const url = this.translate.currentLang === 'en' ? this.urlEn : this.urlHu;
    const url =
      // tslint:disable-next-line: max-line-length
      'https://firebasestorage.googleapis.com/v0/b/delidoku-b2ece.appspot.com/o/programme%2F2019%2FDD_program_for_web_V2.pdf?alt=media&token=8fb9d95b-4097-42bf-91b5-3fd49ad6aa65';
    window.open(url, '_blank');
  }
}
