import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { WindowRefService } from './window-ref.service';
import { LogUpdateService } from './update-banner/services/log-update.service';

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
        private logUpdateService: LogUpdateService
    ) {
        this.changePos = this.winRef.nativeWindow.innerHeight;
        const initLogupdate = this.logUpdateService.init;
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

