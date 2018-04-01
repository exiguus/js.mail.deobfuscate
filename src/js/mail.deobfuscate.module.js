/**
 * @fileOverview Module to deobfuscate rot13 (caesar) encoded mailto-links.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 2.1.0
 */

import MailDeobfuscate from './mail.deobfuscate.class';
const deobfuscate = new MailDeobfuscate();

/**
 * Deobfuscate an rot13 (caesar) obfuscated mailto link.
 * @param {object} object The object to deobfuscate.
 * @module mailDeobfuscate
 * @see MailDeobfuscate
 */
export default function mailDeobfuscate(object) {
  let href = object.href;
  let title = object.title;
  let text = object.text;
  try {
    if (href.length > 0) {
      href = href.split(':', 2);
    }
    try {
      if (href.length === 2) {
        const proto = href[0];
        const mail = href[1];
        const deobfuscatedMail = deobfuscate.decode(mail);
        if (proto === 'mailto') {
          object.href = proto + ':' + deobfuscatedMail;
        }
        if (title.match(mail)) {
          object.title = title.replace(mail, deobfuscatedMail);
        }
        if (text.match(mail)) {
          object.innerHTML = text.replace(mail, deobfuscatedMail);
        }
      }
    } catch (error) {
      console.info( // eslint-disable-line no-console
        'Deobfuscate Mail: No link in href',
        error
      );
    }
  } catch (error) {
    console.info( // eslint-disable-line no-console
      'Deobfuscate Mail: No href protocoll',
      error
    );
  }
}
