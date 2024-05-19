export class User {
  username: string;
  passwordHash: string;
  name:string;
  email:string;
  role:string


  constructor(username: string, password: string, name:string, email:string, role:string) {
    this.username = username;
    this.passwordHash = password;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}

