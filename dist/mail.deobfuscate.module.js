/*!
 * js.mail.deobfuscate 2.0.0
 * https://github.com/exiguus/js.mail.deobfuscate.git
 *
 * Simon Gattner
 * Released under the MIT license
 *
 * Date: 2018-03-25 23:03:24
 */
import MailDeobfuscate from './mail.deobfuscate.class'
const deobfuscate = new MailDeobfuscate()

export default function mailDeobfuscate (element) {
  let href = element.href
  let title = element.title
  let text = element.text
  if (href.length > 0) {
    href = href.split(':', 2)
  }
  if (href.length === 2) {
    const proto = href[0]
    const mail = href[1]
    const deobfuscatedMail = deobfuscate.decode(mail)
    if (proto === 'mailto') {
      element.href = proto + ':' + deobfuscatedMail
    }
    if (title.match(mail)) {
      element.title = title.replace(mail, deobfuscatedMail)
    }
    if (text.match(mail)) {
      element.innerHTML = text.replace(mail, deobfuscatedMail)
    }
  }
}
