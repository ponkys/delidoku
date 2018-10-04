import { Component, Input, OnChanges } from '@angular/core';
import { Film2018, Film } from '../films/film';
import { VideoBackgroundService } from '../video-background.service';

@Component({
    selector: 'app-films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnChanges {
    @Input() films: Array<Film2018 | Film> = [];
    selectedFilm: string;

    constructor(private videoBackgroundService: VideoBackgroundService) { }

    ngOnChanges() {
        this.films.map( film => {
            if (!film.trailer) { return film.trailer };
            film.trailerSafe = this.videoBackgroundService.sanitise(film.trailer);
        });
    }

    openFilmInfo(title: string): string {
        if (title === this.selectedFilm) {
          return this.selectedFilm = '';
        }
        return this.selectedFilm = title;
    }

}
