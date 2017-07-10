import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoBackgroundService } from './video-background.service';
import { DeliNavBarComponent } from './deli-nav-bar/deli-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    VideoBackgroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
