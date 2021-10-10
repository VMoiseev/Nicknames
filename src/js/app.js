export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const a = /[\w-]+/.test(this.username);
    const b = /^[^-_\W\d]/.test(this.username);
    const c = /[^-_\W\d]$/.test(this.username);
    const d = /\d{1,3}/.test(this.username);
    const template = a && b && c && d;
    if (template) {
      return true;
    }
    return false;
  }
}
