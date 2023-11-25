// create-quizz.component.ts

import { Component } from '@angular/core';
import { QuizServiceService } from '../services/quiz/quiz-service.service';
import { Quiz } from '../models/Quiz/quiz';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss']
})
export class CreateQuizzComponent {
  isMenuOpen = false;

  // Modèle pour les données du formulaire
  formData: Quiz = {
    theme: '',
    description: '',
    image: ''
  };

  constructor(private quizService: QuizServiceService) { }

  onSubmit() {
    console.log('Formulaire soumis avec les données suivantes :', this.formData);
    this.createQuiz();
  }

  // Fonction pour créer le quiz en utilisant le service
  createQuiz() {
    this.quizService.createQuiz(this.formData).subscribe(
      createdQuiz => {
        console.log('Quiz créé avec succès:', createdQuiz);
        // Faites quelque chose avec le quiz créé si nécessaire
      },
      error => {
        console.error('Erreur lors de la création du quiz:', error);
        // Gérez les erreurs si nécessaire
      }
    );
  }

  // Fonction pour basculer l'état du menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  // Fonction de déconnexion
  logout() {
    // Votre code de déconnexion ici
  }
}
