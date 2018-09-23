import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ParticlesModule } from 'angular-particle';

// routing
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { VideoBackgroundService } from './video-background.service';
import { WindowRefService } from './window-ref.service';
import { DeliNavBarComponent } from './deli-nav-bar/deli-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { FilmComponent } from './film/film.component';
import { LogoComponent } from './logo/logo.component';
import { LinksComponent } from './links/links.component';
import { LoadingComponent } from './loading/loading.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ProgrammeComponent } from './programme/programme.component';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsCategoriesComponent } from './films-categories/films-categories.component';
import { ButtonComponent } from './button/button.component';
import { TrailerFullScreenComponent } from './home/trailer-full-screen/trailer-full-screen.component';
import { UpdateBannerComponent } from './update-banner/update-banner.component';

// pipe
import {CapitalizePipe} from './utils/capitalize.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DeliNavBarComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    FilmComponent,
    LogoComponent,
    LinksComponent,
    LoadingComponent,
    SponsorsComponent,
    ProgrammeComponent,
    MainComponent,
    FilmsListComponent,
    FilmsCategoriesComponent,
    ButtonComponent,
    TrailerFullScreenComponent,
    UpdateBannerComponent,
    // pipe
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ParticlesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    VideoBackgroundService,
    WindowRefService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
