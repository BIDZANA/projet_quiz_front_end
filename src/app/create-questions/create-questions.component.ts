import { Component } from '@angular/core';

interface Question {
  texte: string;
  image: string;
  propositions: string[]; // Tableau pour stocker les propositions
}


@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  logout() {
    // Votre code de déconnexion ici
  }
  
  question: Question = {
    texte: '',
    image: '',
    propositions: [] // Initialiser le tableau de propositions

};

ajouterProposition() {
  // Ajouter une nouvelle proposition vide
  this.question.propositions.push('');
}

onSubmit() {
  // Vous pouvez implémenter le traitement des données du formulaire ici
  console.log('Données du formulaire :', this.question.propositions);
}
}