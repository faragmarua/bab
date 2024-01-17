import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MietobjekteComponent } from './mietobjekte/mietobjekte.component';
import { ExcursionTipsComponent } from './excursion-tips/excursion-tips.component';
import { AnreiseComponent } from './anreise/anreise.component';
import { FlyerDownloadComponent } from './flyer-download/flyer-download.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'mietobjekte', component: MietobjekteComponent },
  { path: 'ausflugstipps', component: ExcursionTipsComponent },
  { path: 'anreise', component: AnreiseComponent },
  { path: 'flyer-download', component: FlyerDownloadComponent },
  { path: 'impressum', component: ImpressumComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
