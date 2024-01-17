import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MietobjekteComponent } from './mietobjekte/mietobjekte.component';
import { ExcursionTipsComponent } from './excursion-tips/excursion-tips.component';
import { AnreiseComponent } from './anreise/anreise.component';
import { FlyerDownloadComponent } from './flyer-download/flyer-download.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MietobjekteComponent,
    ExcursionTipsComponent,
    AnreiseComponent,
    FlyerDownloadComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
