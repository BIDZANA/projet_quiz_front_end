import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent {
  constructor(private router: Router) {}
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  logout() {
    // Votre code de déconnexion ici
  }
  
  redirigerVersQuizzHistoire() {
    
    this.router.navigate(['/quizzhistoire']);
  }
 
}
