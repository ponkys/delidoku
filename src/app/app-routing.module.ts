import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from 'app/main/main.component';
import { Film2017Component } from './film-2017/film-2017.component';
import { FILMS_2017 } from './films/films-2017';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'archive',
        component: ArchiveComponent
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
