import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { QuizzHistoireComponent } from './quizz-histoire/quizz-histoire.component';
import { QuizzSportComponent } from './quizz-sport/quizz-sport.component';
import { QuizzCulturegeneraleComponent } from './quizz-culturegenerale/quizz-culturegenerale.component';
import { QuizzCinemaComponent } from './quizz-cinema/quizz-cinema.component';
import { QuizzMusiqueComponent } from './quizz-musique/quizz-musique.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'themes-list', component: ThemesListComponent},
  { path: 'quizzhistoire', component: QuizzHistoireComponent},
  { path: 'quizzsport', component: QuizzSportComponent},
  {path: 'quizzculturegenerale', component: QuizzCulturegeneraleComponent},
  {path: 'quizzcinema', component: QuizzCinemaComponent},
  {path: 'quizzmusique', component: QuizzMusiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
