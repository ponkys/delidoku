import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Links } from '../links';
import { WindowRefService } from '../window-ref.service';

@Component({
    selector: 'app-deli-nav-bar',
    templateUrl: './deli-nav-bar.component.html',
    styleUrls: ['./deli-nav-bar.component.css'],
    animations: [
    ]
})
export class DeliNavBarComponent {

    @Input() isScrolled: Boolean;

    links: string[] = Links;
    showNavBar: Boolean = false;
    bigScreen: Boolean = false;

    constructor(
        private router: Router,
        private winRef: WindowRefService) {
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

}
