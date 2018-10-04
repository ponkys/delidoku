import { Component, Input, OnInit } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { environment } from 'environments/environment.prod';
import { TranslationService } from '../translation.service';

@Component({
    selector: 'app-deli-nav-bar',
    templateUrl: './deli-nav-bar.component.html',
    styleUrls: ['./deli-nav-bar.component.css'],
    animations: [
    ]
})
export class DeliNavBarComponent implements OnInit {

    @Input() isScrolled: Boolean;

    showNavBar: Boolean = false;
    bigScreen: Boolean = false;
    languages = environment.LANGUAGES;
    isHu = true;

    constructor(
        private winRef: WindowRefService,
        private translationService: TranslationService
    ) {
        if (this.winRef.nativeWindow.outerWidth > 768) {
            this.bigScreen = true;
        }
    }

    ngOnInit() {
        this.isHu = this.translationService.currentLocale === this.languages.HU ? true : false;
    }

    openNavBar() {
        this.showNavBar = true;
    }

    closeNavBar() {
        this.showNavBar = false;
    }

    facebookNavigate() {
        window.open('https://www.facebook.com/delidokubp/', '_blank');
    }

    onLangChange(lang: string) {
        this.isHu = lang === this.languages.HU ? true : false;
        this.translationService.changeLang(lang);
    }

}
