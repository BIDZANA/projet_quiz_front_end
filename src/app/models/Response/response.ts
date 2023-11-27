export class Response {
    id_response: number;
    isValid: boolean;
    value: string;
    id_question: number;
  
    constructor(
      id_response: number,
      isValid: boolean,
      value: string,
      id_question: number
    ) {
      this.id_response = id_response;
      this.isValid = isValid;
      this.value = value;
      this.id_question = id_question;
    }
}
  