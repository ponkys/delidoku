import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../links';
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
export class DeliNavBarComponent {

    @Input() isScrolled: Boolean;

    links: string[] = Routes;
    showNavBar: Boolean = false;
    bigScreen: Boolean = false;
    languages = environment.LANGUAGES;

    constructor(
        private router: Router,
        private winRef: WindowRefService,
        private translationService: TranslationService
    ) {
        if (this.winRef.nativeWindow.outerWidth > 768) {
            this.bigScreen = true;
        }
    }

    onSelect(link: string) {
        this.router.navigate([`/${link}`]);
        if (this.bigScreen === false) {
            this.closeNavBar()
        }
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
        this.translationService.changeLang(lang);
    }

}
