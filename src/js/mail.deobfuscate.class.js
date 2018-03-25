export default class mailDeobfuscate { // eslint-disable-line
  constructor (string) {
    this.decodeChar = (c) =>
      (c >= 'a' && c <= 'z') ? String.fromCharCode(97 + (c.charCodeAt(0) - 97 + 13) % 26) : // eslint-disable-line operator-linebreak
        (c >= 'A' && c <= 'Z') ? String.fromCharCode(65 + (c.charCodeAt(0) - 65 + 13) % 26) : // eslint-disable-line operator-linebreak
          c

    this.replaceString = (str) =>
      Array.prototype.map.call(str, this.decodeChar).join('')
  }

  get decode () {
    return this.replaceString
  }
}
