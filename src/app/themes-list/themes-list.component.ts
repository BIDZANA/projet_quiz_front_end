import { User } from './../models/User/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from '../services/authentification/authentification-service.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthentificationServiceService
  ) {}

  isMenuOpen = false;
  username: string | null = null;
  user: User | null = null;
  themes: string[] = [];

  ngOnInit() {
    // Récupérer le nom d'utilisateur du localStorage
    const userString = localStorage.getItem('user');
    console.log(userString);
    if (userString) {
      this.user = JSON.parse(userString);
      console.log(this.user)
      if(this.user != null){
        this.username = this.user.username;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }
  
  redirigerVersQuizzHistoire() {
    
    this.router.navigate(['/quizzhistoire']);
  }
  redirigerVersQuizzSport() {
    
    this.router.navigate(['/quizzsport']);
  }

  redirigerVersQuizzCulture() {
    
    this.router.navigate(['/quizzculturegenerale']);
  }
  
  redirigerVersQuizzCinema() {
    
    this.router.navigate(['/quizzcinema']);
  }

  redirigerVersQuizzMusique() {
    
    this.router.navigate(['/quizzmusique']);
  }
}
