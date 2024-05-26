export class User {
  username: string;
  passwordHash: string;
  name:string;
  email:string;



  constructor(username: string = "", password: string = "", name:string = "", email:string = ""){
    this.username = username;
    this.passwordHash = password;
    this.name = name;
    this.email = email;
  }
}

