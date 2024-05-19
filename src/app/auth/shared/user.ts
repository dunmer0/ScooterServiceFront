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

export class LoginUser{
  username:string;
  passwordHash:string;
  jwt:string

  constructor(username:string="",password:string="", jwt:string="") {
    this.username = username;
    this.passwordHash = password;
    this.jwt = jwt;
  }
}

