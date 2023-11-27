export class Game {
    id_game?: number;
    date: Date;
    score: number;
    id_quiz: number;
  
    constructor(id_game: number, date: Date, score: number, id_quiz: number) {
      this.id_game = id_game;
      this.date = date;
      this.score = score;
      this.id_quiz = id_quiz;
    }
}
