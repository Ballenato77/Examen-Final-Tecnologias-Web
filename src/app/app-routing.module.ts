import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GobiernoComponent } from './components/gobierno/gobierno.component';
import { NasaComponent } from './components/nasa/nasa.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'gob', component: GobiernoComponent },
  { path: 'nasa', component: NasaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
