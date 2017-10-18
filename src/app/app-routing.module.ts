import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { FundraiserComponent } from 'app/fundraiser/fundraiser.component';
import { MainComponent } from 'app/main/main.component';

const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '',
        component: MainComponent,
    },
    { path: 'fundraiser', component: FundraiserComponent },
    { path: '*', component: MainComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        HttpClientModule],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
