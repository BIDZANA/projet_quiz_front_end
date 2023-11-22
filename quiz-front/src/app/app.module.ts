import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { QuizzHistoireComponent } from './quizz-histoire/quizz-histoire.component';
import { QuizzSportComponent } from './quizz-sport/quizz-sport.component';
import { QuizzCulturegeneraleComponent } from './quizz-culturegenerale/quizz-culturegenerale.component';
import { QuizzCinemaComponent } from './quizz-cinema/quizz-cinema.component';
import { QuizzMusiqueComponent } from './quizz-musique/quizz-musique.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AccueilComponent,
    ConnexionComponent,
    ThemesListComponent,
    QuizzHistoireComponent,
    QuizzSportComponent,
    QuizzCulturegeneraleComponent,
    QuizzCinemaComponent,
    QuizzMusiqueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule, // Module des icônes
    MatMenuModule, // Module des menus
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
