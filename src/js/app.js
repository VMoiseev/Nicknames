export default class Validator {
  static validateUsername(username) {
    const a = /[^\w-]+/.test(username);
    const b = /^[^-_\W\d]/.test(username);
    const c = /[^-_\W\d]$/.test(username);
    const d = /\d{4,}/.test(username);
    return !a && b && c && !d;
  }
}
