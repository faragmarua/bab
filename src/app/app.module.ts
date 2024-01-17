import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MietobjekteComponent } from './mietobjekte/mietobjekte.component';
import { ExcursionTipsComponent } from './excursion-tips/excursion-tips.component';
import { AnreiseComponent } from './anreise/anreise.component';
import { FlyerDownloadComponent } from './flyer-download/flyer-download.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { VerrechnungComponent } from './verrechnung/verrechnung.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MietobjekteComponent,
    ExcursionTipsComponent,
    AnreiseComponent,
    FlyerDownloadComponent,
    ImpressumComponent,
    VerrechnungComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    
  }
}
