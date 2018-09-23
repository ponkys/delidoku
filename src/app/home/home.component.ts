import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { PARTICLES_PARAMS } from './particles-params';
import { TRAILERS } from './trailers-const';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    currentVideo: string;
    height = 100;
    isHomeComponent: false;
    mobileScreen = true;
    myParams: object = PARTICLES_PARAMS;
    particlesStyle: object = {};
    showVideo: boolean;
    trialers = TRAILERS;
    width = 100;

    constructor(
        private winRef: WindowRefService
    ) {
        if (this.winRef.nativeWindow.innerWidth > 768) {
            this.mobileScreen = false;
        }
    }

    ngOnInit() {
        this.particlesStyle = {
            'position': 'absolute',
            'width': '100vw',
            'height': '100vh',
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
    }

    onClickVideo(video: string) {
        this.currentVideo = video;
        this.showVideo = true;
    }

    onCloseVideo() {
        this.showVideo = false;
        this.currentVideo = null;
    }

    facebookNavigate() {
        window.open('https://www.facebook.com/delidokubp/', '_blank');
    }

}
