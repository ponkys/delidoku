import { Component } from '@angular/core';

import { WindowRefService } from '../window-ref.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../films/film';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent {

    mobileScreen = true;
    films: Array<Film>;
    year: string;
    title: string;

    constructor(
        private winRef: WindowRefService,
        private aRoute: ActivatedRoute
    ) {
        if (this.winRef.nativeWindow.outerWidth > 768) {
            this.mobileScreen = false;
        }
        this.aRoute.data.subscribe(data => {
            this.year = data['year'];
            this.title = data['title'];
            this.films = data['films']
            console.log(data);
        })
    }

}
