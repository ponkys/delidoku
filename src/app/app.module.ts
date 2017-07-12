import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { VideoBackgroundService } from './video-background.service';
import { DeliNavBarComponent } from './deli-nav-bar/deli-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliNavBarComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    VideoBackgroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
