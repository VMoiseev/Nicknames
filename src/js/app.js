export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const a = /[\w-]+/.test(this.username);
    const b = /^[^-_\W\d]/.test(this.username);
    const c = /[^-_\W\d]$/.test(this.username);
    const d = /\d{4,}/.test(this.username);
    return a && b && c && !d;
  }
}
