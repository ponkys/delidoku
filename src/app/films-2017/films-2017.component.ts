import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { Films } from './films-2017';
import { VideoBackgroundService } from '../video-background.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-films-2017',
  templateUrl: './films-2017.component.html',
  styleUrls: ['./films-2017.component.css']
})
export class Films2017Component implements OnInit {

  mobileScreen = true;
  films = Films;
  selectedFilm: string;

  constructor(private winRef: WindowRefService,
              private videoBackgroundService: VideoBackgroundService) {
    if (winRef.nativeWindow.outerWidth > 768) {
      this.mobileScreen = false;
    }
  }

  ngOnInit() {
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
