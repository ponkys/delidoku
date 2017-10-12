import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
    },
    { path: 'team', component: TeamComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'films', component: FilmsComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        HttpClientModule],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
