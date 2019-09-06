import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ParticlesModule } from 'angular-particle';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
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
import { Film2017Component } from './film-2017/film-2017.component';
import { LogoComponent } from './logo/logo.component';

// pipe
import { CapitalizePipe } from './utils/capitalize.pipe';
import { LinksComponent } from './links/links.component';
import { LoadingComponent } from './loading/loading.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ProgrammeComponent } from './programme/programme.component';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { Film2018Component } from './film-2018/film-2018.component';
import { ButtonComponent } from './button/button.component';
import { TrailerFullScreenComponent } from './home/trailer-full-screen/trailer-full-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { ArchiveComponent } from './archive/archive.component';
import { Film2019Component } from './film-2019/film-2019.component';

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
    Film2017Component,
    Film2019Component,
    LogoComponent,
    LinksComponent,
    LoadingComponent,
    SponsorsComponent,
    ProgrammeComponent,
    MainComponent,
    FilmsListComponent,
    // pipe
    CapitalizePipe,
    Film2018Component,
    ButtonComponent,
    TrailerFullScreenComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ParticlesModule
  ],
  providers: [VideoBackgroundService, WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule {}
