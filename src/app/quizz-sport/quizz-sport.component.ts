import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationServiceService } from '../services/authentification/authentification-service.service';
import { User } from '../models/User/user';
import { QuizServiceService } from '../services/quiz/quiz-service.service';
import { Quiz } from '../models/Quiz/quiz';
import { Game } from '../models/Game/game';
import { GameServiceService } from '../services/game/game-service.service';

@Component({
  selector: 'app-quizz-sport',
  templateUrl: './quizz-sport.component.html',
  styleUrls: ['./quizz-sport.component.scss']
})
export class QuizzSportComponent implements OnInit {
  quiz: any;
  constructor(
    private router: Router,
    private authService: AuthentificationServiceService,
    private quizService: QuizServiceService,
    private route: ActivatedRoute,
    private gameService: GameServiceService
  ) {}

  isMenuOpen = false;
  username: string | null = null;
  user: User | null = null;

  // Tableau pour stocker les quizzes
  sportQuizzes: Quiz[] = [];

  ngOnInit(): void {
    // Récupérer le nom d'utilisateur du localStorage
    const userString = localStorage.getItem('user');
    console.log(userString);
    if (userString) {
      this.user = JSON.parse(userString);
      console.log(this.user)
      if (this.user != null) {
        this.username = this.user.username;
      }
    }

    // Appeler la fonction pour obtenir les quizzes de sport
    this.getAndStoreSportQuizzes();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }

  goToAnotherPage(quiz: Quiz) {
    this.router.navigate(['/quiz-game'], { state: { quiz } });
  }

  private getAndStoreSportQuizzes() {
    this.quizService.getSportQuizzes().subscribe(
      (quizzes: Quiz[]) => {
        this.sportQuizzes = quizzes;
        console.log(this.sportQuizzes);
      },
      (error) => {
        console.error('Error fetching sport quizzes', error);
      }
    );
  }

  startGame(quiz: Quiz) {
    // Créez un nouvel objet Game avec les informations initiales
    const newGame: Game = {
      id_game: 0, // L'ID sera attribué côté serveur lors de la création
      date: new Date(),
      score: 0,
      id_quiz: quiz?.id_quiz || 0
    };

    // Appelez la méthode du service pour créer un nouveau jeu
    this.gameService.createGame(newGame).subscribe(
      (createdGame) => {
        console.log('Game created successfully:', createdGame);

        // Redirigez l'utilisateur vers le composant de jeu avec le nouveau jeu
        this.router.navigate(['/quiz-game'], { state: { game: createdGame } });
      },
      (error) => {
        console.error('Error creating game:', error);
      }
    );
  }
}
