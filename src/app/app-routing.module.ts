import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// import { HomeComponent } from './home/home.component';
// import { TeamComponent } from './team/team.component';
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
import { MainComponent } from 'app/main/main.component';
import { Films2017Component } from './films-2017/films-2017.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    { path: 'archive', component: Films2017Component },
    { path: '*', component: MainComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        HttpClientModule],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
