import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss']
})
export class CreateQuizzComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  logout() {
    // Votre code de déconnexion ici
  }
  
  constructor(private router: Router) {}
  formData = {
    theme: '',
    description: '',
    image: '',
  };

  onSubmit() {
    console.log('Formulaire soumis avec les données suivantes :', this.formData);
  }

  redirigerVersQuestions() {
    // Redirigez l'utilisateur vers la page connexion (ajustez le chemin selon votre configuration)
    this.router.navigate(['/create-questions']);
  }
}
