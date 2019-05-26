import { Component, OnInit, OnDestroy } from '@angular/core';
import { Film2018 } from '../films/film';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { FILMS_2018, FILMS_2018_HU } from '../films/films-2018';
import { Subscription } from 'rxjs';

const BLANK_CATEGORIES = [
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

interface Category {
    name: string;
    films: Film2018[];
}

@Component({
  selector: 'app-film-2018',
  templateUrl: './film-2018.component.html',
  styleUrls: ['../film-2017/film-2017.component.css']
})
export class Film2018Component implements OnInit, OnDestroy {
    // title = 'FILMS.TITLE'; leave here to know the translated key IMPORTANT
    title = 'ARCHIVE.TITLE'
    categories: Array<Category> = [];

    private subscriptions: Subscription[] = [];

    constructor(
        private tr: TranslateService
    ) {
    }

    ngOnInit() {
        this.onLanguageChange();
        if (this.categories.length === 0) {
            this.determineFilmsBasedOnlanguage(this.tr.currentLang);
        }
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    private mapFilms(films: Film2018[], categories: Category[]): Category[] {
        return categories.map((sectionObj: Category, i: number) => {
            // reset array
            sectionObj.films = [];
            films.map(filmObj => {
                if (filmObj.section === sectionObj.name) {
                    categories[i].films = [...categories[i].films, filmObj];
                }
            });
            return sectionObj;
        });
    }

    private onLanguageChange() {
        this.subscriptions.push(this.tr.onLangChange.subscribe((event: LangChangeEvent) => {
            this.determineFilmsBasedOnlanguage(event.lang);
        }));
    }

    private determineFilmsBasedOnlanguage(lang: string): void {
        if (lang === environment.LANGUAGES.EN) {
            this.categories = this.mapFilms(FILMS_2018, [...BLANK_CATEGORIES]);
            return;
        }
        this.categories = this.mapFilms(FILMS_2018_HU, [...BLANK_CATEGORIES]);
    }
}
