import { Component, Input } from '@angular/core';

import { WindowRefService } from '../window-ref.service';
import { ActivatedRoute } from '@angular/router';
import { Film2018, Film2017 } from '../films/film';

@Component({
    selector: 'app-film-2017',
    templateUrl: './film-2017.component.html',
    styleUrls: ['./film-2017.component.css']
})
export class Film2017Component {

    @Input() films: Array<Film2017>;
    mobileScreen = true;
    title = 'ARCHIVE.TITLE';

    constructor(
        private winRef: WindowRefService,
    ) {
        if (this.winRef.nativeWindow.outerWidth > 768) {
            this.mobileScreen = false;
        }
    }

}
