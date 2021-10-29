

export class AuthService {
  private loggedin = false;
  getAuthenticationStatus() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedin)
      }, 200)
    })
  }
  getLoggedin() {
    return this.loggedin;
  }
  login() {
     this.loggedin = true;
  }
  logout() {
     this.loggedin = false;
  }
}
