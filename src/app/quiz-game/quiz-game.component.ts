import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../models/Quiz/quiz';
import { Game } from '../models/Game/game';
import { GameServiceService } from '../services/game/game-service.service';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.scss']
})
export class QuizGameComponent implements OnInit {
  game: Game | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Récupérer la partie à partir de la navigation
    this.game = history.state.game;
    
    
    // Vérifier si le quiz est défini
    if (!this.game) {
      this.router.navigate(['/themes-list']);
    }
  }

  
}
