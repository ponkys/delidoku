import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ParallelShowcaseComponent } from './parallel-showcase/parallel-showcase.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'team',  component: TeamComponent },
    { path: 'contact',  component: ContactComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'parallel-showcase',  component: ParallelShowcaseComponent },
    { path: '**',  component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
