import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

import { UpdateToastService } from './services/update-toast.service';

@Component({
  selector: 'app-update-banner',
  templateUrl: './update-banner.component.html',
  styleUrls: ['./update-banner.component.css'],
  animations: [
    trigger('bannerState', [
        state('no', style({
        transform: 'translateY(-120%)'
        })),
        state('yes',   style({
        transform: 'translateY(0%)'
        })),
        transition('no => yes', animate('300ms ease-in'))
    ])]
})
export class UpdateBannerComponent implements OnInit {

    show = false;
    isShown = 'no';

    constructor(private updateToastService: UpdateToastService) {}

    ngOnInit() {
        this.updateToastService.toastEvents.subscribe((ev) => {
            if (ev !== null) {
                this.show = true;
                setTimeout(() => {
                    this.isShown = 'yes';
                }, 100);
            }
        });
    }

    onWindowRefresh() {
        window.location.reload();
    }

}
