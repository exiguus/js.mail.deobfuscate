/**
 * @fileOverview Class to decode a rot13 (caesar) encoded string.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 2.1.0
 */
export default class MailDeobfuscate {
  /**
   * Decode a rot13 (caesar) string.
   * @class MailDeobfuscate
   * @classdesc Class to decode a rot13 (caesar) encoded string.
   * @alias module:mailDeobfuscate
   */
  constructor() {
    this.decodeChar = (c) =>
      (c >= 'a' && c <= 'z') ? String.fromCharCode(
        97 + (c.charCodeAt(0) - 97 + 13) % 26
      ) :
      (c >= 'A' && c <= 'Z') ? String.fromCharCode(
        65 + (c.charCodeAt(0) - 65 + 13) % 26
      ) :
      c;
    this.decodeString = (string) =>
      Array.prototype.map.call(string, this.decodeChar).join('');
  }
  /**
   * Get the decoded rot13 (caesar) string.
   * @param {string} string The encoded rot13 (caesar) string.
   * @return {string} Encoded rot13 (caesar) string.
   */
  get decode() {
    return this.decodeString;
  }
}
