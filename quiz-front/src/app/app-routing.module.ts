import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { QuizzHistoireComponent } from './quizz-histoire/quizz-histoire.component';
import { QuizzSportComponent } from './quizz-sport/quizz-sport.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'themes-list', component: ThemesListComponent},
  { path: 'quizzhistoire', component: QuizzHistoireComponent},
  { path: 'quizzsport', component: QuizzSportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
