export class Question {
    id_question: number;
    statement: string;
    image?: string;
    id_quiz: number;
  
    constructor(id_question: number, statement: string, image: string, id_quiz: number) {
      this.id_question = id_question;
      this.statement = statement;
      this.image = image;
      this.id_quiz = id_quiz;
    }
  }
  