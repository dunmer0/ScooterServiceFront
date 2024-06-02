export class User {
  username: string;
  passwordHash: string;
  name: string;
  email: string;


  constructor(username: string = "", password: string = "", name: string = "", email: string = "") {
    this.username = username;
    this.passwordHash = password;
    this.name = name;
    this.email = email;
  }
}

export class LoginUser {
  username: string;
  passwordHash: string;
  jwt: string

  constructor(username: string = "", password: string = "", jwt: string = "") {
    this.username = username;
    this.passwordHash = password;
    this.jwt = jwt;
  }
}

export class ResetPasswordDto {
  email: string;
  token: string;
  newPassword: string;

  constructor(email: string, token: string, newPassword: string) {
    this.email = email;
    this.token = token;
    this.newPassword = newPassword;
  }
}




