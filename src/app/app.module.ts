import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FilmsComponent } from './films/films.component';
import { LogoComponent } from './logo/logo.component';

// pipe
import {CapitalizePipe} from './utils/capitalize.pipe';
import { LinksComponent } from './links/links.component';
import { GifComponent } from './gif/gif.component';
import { LoadingComponent } from './loading/loading.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ProgrammeComponent } from './programme/programme.component';
import { MainComponent } from './main/main.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliNavBarComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    FilmsComponent,
    LogoComponent,
    // pipe
    CapitalizePipe,
    LinksComponent,
    GifComponent,
    LoadingComponent,
    SponsorsComponent,
    ProgrammeComponent,
    MainComponent,
    FundraiserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    VideoBackgroundService,
    WindowRefService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
