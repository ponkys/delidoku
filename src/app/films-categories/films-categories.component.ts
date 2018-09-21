import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../films/film';

@Component({
  selector: 'app-films-categories',
  templateUrl: './films-categories.component.html',
  styleUrls: ['../film/film.component.css']
})
export class FilmsCategoriesComponent implements OnInit {
    year: string;
    title: string;
    categories = [
        {
            name: 'main',
            films: []
        },
        {
            name: 'Retrospective Eduardo Coutinho',
            films: []
        },
        {
            name: 'FOCUS Ecuador',
            films: []
        }
    ];

    constructor(
        private aRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.aRoute.data.subscribe(data => {
            this.title = data['title'];
            const films: Array<Film> = data['films'];
            this.categories.map((sectionObj, i) => {
                films.map(filmObj => {
                    if (filmObj.section === sectionObj.name) {
                        this.categories[i].films.push(filmObj);
                    }
                })
            })
        })
    }
}
