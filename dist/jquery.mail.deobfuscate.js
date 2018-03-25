/*!
 * js.mail.deobfuscate 1.0.1
 * https://github.com/exiguus/js.mail.deobfuscate.git
 *
 * Simon Gattner
 * Released under the MIT license
 *
 * Date: 2018-03-25 22:03:32
 */

(function ($) {
  'use strict'

  $.mailDeobfuscate = {
    replaceString: function (str) {
      return str.replace(/[a-zA-Z]/g, function (str) { return $.mailDeobfuscate.decodeChar(str) })
    },
    decodeChar: function (c) {
      return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
    }
  }

  $.fn.mailDeobfuscate = function () {
    return this.not('[data-deobfuscate="done"]').each(function () {
      var href = $(this).attr('href')
      var title = $(this).attr('title')
      var text = $(this).text()
      if (href.length > 0) href = href.split(':', 2)
      if (href.length === 2) {
        var proto = href[0]
        var mail = href[1]
        var deobfuscatedMail = $.mailDeobfuscate.replaceString(mail)
        if (proto === 'mailto') {
          $(this)
            .attr('href', proto + ':' + deobfuscatedMail)
            .attr('data-deobfuscate', 'done')
        }
        if (title.match(mail)) {
          $(this).attr('title', title.replace(mail, deobfuscatedMail))
        }
        if (text.match(mail)) {
          $(this).text(text.replace(mail, deobfuscatedMail))
        }
      }
    })
  }
}(jQuery)); // eslint-disable-line semi
