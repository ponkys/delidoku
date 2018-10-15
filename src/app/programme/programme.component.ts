import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  urlEn = 'https://firebasestorage.googleapis.com/v0/b/delidoku-b2ece.appspot.com/o/programme%2Fprogramme_en.png?alt=media&token=9bd3b18b-0ad9-4dc0-833b-849bb7061cd0';
  // tslint:disable-next-line:max-line-length
  urlHu = 'https://firebasestorage.googleapis.com/v0/b/delidoku-b2ece.appspot.com/o/programme%2Fprogramme_hu.png?alt=media&token=34982b36-c83c-4230-9bf1-289ad095df3c';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  download() {
    const url = this.translate.currentLang === 'en' ? this.urlEn : this.urlHu;
    window.open(url, '_blank');
  }

}
