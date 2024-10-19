import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent
  ],
  exports: [ClientComponent],
  imports: [
    BrowserModule,
    ClientComponent,
    YouTubePlayerModule,
    HttpClientModule
  ],
  providers: [
    //ClientComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
