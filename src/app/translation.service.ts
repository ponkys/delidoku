import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  LANGUAGES = environment.LANGUAGES;
  currentLocale: string;

  constructor(private translate: TranslateService) {
  }

  init() {
    this.currentLocale = this.translate.getBrowserLang();
    this.translate.setDefaultLang(this.LANGUAGES.EN);
    if ( this.currentLocale === this.LANGUAGES.HU) {
      this.translate.use(this.currentLocale);
      return;
    }
    this.translate.use(this.LANGUAGES.EN)
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
