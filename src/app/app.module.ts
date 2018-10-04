import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ParticlesModule } from 'angular-particle';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



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

// pipe
import { CapitalizePipe } from './utils/capitalize.pipe';
import { LinksComponent } from './links/links.component';
import { LoadingComponent } from './loading/loading.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ProgrammeComponent } from './programme/programme.component';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsCategoriesComponent } from './films-categories/films-categories.component';
import { ButtonComponent } from './button/button.component';
import { TrailerFullScreenComponent } from './home/trailer-full-screen/trailer-full-screen.component';
import { AppRoutingModule } from './app-routing.module';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

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
    // pipe
    CapitalizePipe,
    FilmsCategoriesComponent,
    ButtonComponent,
    TrailerFullScreenComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ParticlesModule
  ],
  providers: [
    VideoBackgroundService,
    WindowRefService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
