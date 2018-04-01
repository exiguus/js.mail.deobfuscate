/**
 * @fileOverview jQuery Plugin
  to deobfuscate rot13 (caesar) encoded mailto-links.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 2.1.0
 */

/**
 * @external "jQuery.fn"
 * @see {@link http://docs.jquery.com/Plugins/Authoring The jQuery Plugin Guide}
 */

(function($) {
  'use strict';
  /**
   * jQuery Methods to decode a rot13 (caesar) encoded string.
   * @function external:"jQuery".mailDeobfuscate
   */

  $.mailDeobfuscate = {
    /**
     * jQuery Method to decode a rot13 (caesar) encoded string.
     * @function external:"jQuery".mailDeobfuscate.getDecodeString
     * @param {string} string The encoded rot13 (caesar) string.
     * @return {string} Encoded rot13 (caesar) string.
     */

    getDecodeString: function(string) {
      return string.replace(
        /[a-zA-Z]/g,
        function(string) {
         return $.mailDeobfuscate.getDecodeChar(string);
       }
     );
    },
    /**
     * jQuery Method to decode a rot13 (caesar) encoded char.
     * @function external:"jQuery".mailDeobfuscate.getDecodeChar
     * @param {string} string The encoded rot13 (caesar) char.
     * @return {string} Encoded rot13 (caesar) char.
     */

    getDecodeChar: function(c) {
      return String.fromCharCode(
        (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
      );
    },
  };
  /**
   * jQuery Prototype to deobfuscate an rot13 (caesar) obfuscated object.
   * @function external:"jQuery.fn".mailDeobfuscate
   */

  $.fn.mailDeobfuscate = function() {
    return this.not('[data-deobfuscate="done"]').each(function(index, value) {
      var object = $(value); // eslint-disable-line no-var
      var href = object.attr('href'); // eslint-disable-line no-var
      var title = object.attr('title'); // eslint-disable-line no-var
      var text = object.text(); // eslint-disable-line no-var
      try {
        if (href.length > 0) href = href.split(':', 2);
        try {
          if (href.length === 2) {
            var proto = href[0]; // eslint-disable-line no-var
            var mail = href[1]; // eslint-disable-line no-var
            var newMail = // eslint-disable-line no-var
              $.mailDeobfuscate.getDecodeString(mail);
            if (proto === 'mailto') {
              object
                .attr('href', proto + ':' + newMail)
                .attr('data-deobfuscate', 'done');
            }
            if (title.match(mail)) {
              object.attr('title', title.replace(mail, newMail));
            }
            if (text.match(mail)) {
              object.text(text.replace(mail, newMail));
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
    });
  };
}(jQuery));
