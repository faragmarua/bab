import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MietobjekteComponent } from './mietobjekte/mietobjekte.component';

const routes: Routes = [ 
  // { path: '', component: AppComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'mietobjekte', component: MietobjekteComponent },
// other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
