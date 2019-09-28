import { Component, Input, OnChanges } from '@angular/core';
import { Film2018, Film2017 } from '../films/film';
import { VideoBackgroundService } from '../video-background.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnChanges {
  @Input() films: Array<Film2018 | Film2017 & {still: string}>  = [];
  selectedFilm: string;

  constructor(private videoBackgroundService: VideoBackgroundService) {}

  ngOnChanges() {
    this.films.forEach(film => {
      film.trailerSafe = film.trailer
        ? this.videoBackgroundService.sanitise(film.trailer)
        : null;
    });
  }

  openFilmInfo(title: string): string {
    if (title === this.selectedFilm) {
      return (this.selectedFilm = '');
    }
    return (this.selectedFilm = title);
  }
}
