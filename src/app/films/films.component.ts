import { Component } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { Films } from './films';
import { VideoBackgroundService } from '../video-background.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  mobileScreen = true;
  films = Films;
  selectedFilm: string;

  constructor(private winRef: WindowRefService,
              private videoBackgroundService: VideoBackgroundService) {
    if (winRef.nativeWindow.outerWidth > 768) {
      this.mobileScreen = false;
    }
    this.films.map( film => {
      return film.trailerSafe = this.videoBackgroundService.sanitise(film.trailer);
    })
  }

  openFilmInfo(title: string): string {
    if (title === this.selectedFilm) {
      return this.selectedFilm = '';
    }
    return this.selectedFilm = title;
  }

}
