import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from 'app/main/main.component';
import { FilmComponent } from './film/film.component';
import { FILMS_2017 } from './films/films-2017';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        data : {
            year : '',
            title: 'FILMS.TITLE',
            // Logic moved to categories component due to translations
            films: []
        }
    },
    {
        path: 'archive',
        component: FilmComponent,
        data : {
            year : '2017',
            title: 'Archive',
            films: FILMS_2017
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 70] // [x, y]
            // enableTracing: true
        }),
        HttpClientModule
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
