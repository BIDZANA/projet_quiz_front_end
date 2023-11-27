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
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { CreateQuizzComponent } from './create-quizz/create-quizz.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { ListeJoueursComponent } from './liste-joueurs/liste-joueurs.component';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';
import { VerificationComponent } from './verification/verification.component';
import { QuizGameComponent } from './quiz-game/quiz-game.component';

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
  {path: 'quizzmusique', component: QuizzMusiqueComponent},
  {path: 'create-questions', component: CreateQuestionsComponent},
  {path: 'create-quizz', component: CreateQuizzComponent},
  {path: 'interface-admin', component: InterfaceAdminComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'liste-joueurs', component: ListeJoueursComponent},
  {path: 'liste-jeux', component: ListeJeuxComponent},
  {path: 'quiz-game', component: QuizGameComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
