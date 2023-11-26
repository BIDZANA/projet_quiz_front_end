export class User {
  username: string;
  email: string;
  role: string;

  constructor(username: string, email: string, role: string = 'USER') {
    this.username = username;
    this.email = email;
    this.role = role;
  }
}