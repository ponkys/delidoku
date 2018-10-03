import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../films/film';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { FILMS_2018, FILMS_2018_HU } from '../films/films-2018';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-films-categories',
  templateUrl: './films-categories.component.html',
  styleUrls: ['../film/film.component.css']
})
export class FilmsCategoriesComponent implements OnInit, OnDestroy {
    year: string;
    title: string;
    categories = [
        {
            name: 'FILMS.OFFICIAL_SELECTION',
            films: []
        },
        {
            name: 'FILMS.RETROSPECTIVE',
            films: []
        },
        {
            name: 'FILMS.ECUADOR',
            films: []
        }
    ];

    constructor(
        private aRoute: ActivatedRoute,
        private tr: TranslateService,
        private translationService: TranslationService
    ) {
    }

    ngOnInit() {
        this.aRoute.data.subscribe(data => {
            this.title = data['title'];
            this.renderFilmsTranslations();
        })
    }

    private mapFilms(films: Film[]) {
        this.categories = this.categories.map((sectionObj, i) => {
            sectionObj.films = [];
            films.map(filmObj => {
                if (filmObj.section === sectionObj.name) {
                    this.categories[i].films.push(filmObj);
                }
            });
            return sectionObj;
        });
    }

    ngOnDestroy() {
        this.tr.onLangChange.unsubscribe();
    }

    determineFilms() {
        if (this.translationService.currentLocale === environment.LANGUAGES.EN) {
            return FILMS_2018;
        }
        return FILMS_2018_HU;
    }

    private renderFilmsTranslations() {
        this.tr.onLangChange.subscribe((event: LangChangeEvent) => {
            if (event.lang === environment.LANGUAGES.EN) {
                this.mapFilms(FILMS_2018);
                return;
            }
            this.mapFilms(FILMS_2018_HU);
        });
    }
}
