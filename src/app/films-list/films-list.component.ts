import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../films/film';
import { VideoBackgroundService } from '../video-background.service';

@Component({
    selector: 'app-films-list',
    templateUrl: './films-list.component.html',
    styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
    @Input() films: Film[] = [];
    selectedFilm: string;

    constructor(private videoBackgroundService: VideoBackgroundService) { }

    ngOnInit() {
        this.films.map( film => {
            return film.trailerSafe = this.videoBackgroundService.sanitise(film.trailer);
        });
    }

    openFilmInfo(title: string): string {
        if (title === this.selectedFilm) {
          return this.selectedFilm = '';
        }
        return this.selectedFilm = title;
    }

}
