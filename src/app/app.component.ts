import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';


import { WindowRefService } from './window-ref.service';
import { TranslationService } from './translation.service';
import { environment } from 'environments/environment.prod';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 0;
    removeOnWindowEvent = false

    constructor(
        private winRef: WindowRefService,
        private location: Location,
        private router: Router,
        private translationService: TranslationService
    ) {
        this.translationService.init();
        this.changePos = this.winRef.nativeWindow.innerHeight;
        this.router.events.subscribe(event => {
            // if (event instanceof NavigationEnd && environment.production) {
            //     (<any>window).ga('set', 'page', event.urlAfterRedirects);
            //     (<any>window).ga('send', 'pageview');
            // }
        });
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(evt) {
        if (this.location.path() === '/archive') {
            this.isScrolled = true;
            return;
        }
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}

