export class Quiz {
    id_quiz: number;
    theme: string;
    description: string;
    image: string;
  
    constructor(id_quiz: number, theme: string, description: string, image: string) {
      this.id_quiz = id_quiz;
      this.theme = theme;
      this.description = description;
      this.image = image;
    }
  }
  