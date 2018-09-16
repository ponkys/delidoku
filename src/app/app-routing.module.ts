import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from 'app/main/main.component';
import { FilmComponent } from './film/film.component';
import { FILMS_2017 } from './films/films-2017';
import { FILMS_2018 } from './films/films-2018';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        data : {
            year : '',
            title: 'Films',
            films: FILMS_2018
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
            scrollPositionRestoration: 'enabled'
        }),
        HttpClientModule],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
