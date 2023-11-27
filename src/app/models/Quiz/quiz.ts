export class Quiz {
  id_quiz: number | undefined;
  theme: string;
  title: string;
  description: string;
  image: string;
  level: string;
  
    constructor(theme: string, title: string, description: string, image: string, level: string) {
      this.theme = theme;
      this.description = description;
      this.image = image;
      this.title = title;
      this.level = level;
    }
  }