var CONSOLE_LOG = false; // eslint-disable-line no-var
QUnit.module('Test Mail deobfuscate jQuery Plugin', function(hooks) {
  hooks.before(function(assert) {
    $('#qunit-fixture').html('');
    assert.ok(true, 'before called');
  });
  QUnit.test('call hooks', function(assert) {
    assert.expect(1);
  });
  QUnit.moduleStart(function(details) {
    if (CONSOLE_LOG) {
      console.info( // eslint-disable-line no-console
        'Now running: ',
        details.name
      );
    }
  });
  QUnit.test('$.mailDeobfuscate', function(assert) {
    assert.equal(
      typeof $.mailDeobfuscate === 'object',
      true,
      '$.mailDeobfuscate is object'
    );
    assert.equal(
      typeof $.mailDeobfuscate.getDecodeString === 'function',
      true,
      '$.mailDeobfuscate.getDecodeString is function'
    );
    assert.equal(
      typeof $.mailDeobfuscate.getDecodeChar === 'function',
      true,
      '$.mailDeobfuscate.getDecodeChar is function'
    );
    // getDecodeChar
    assert.equal(
      $.mailDeobfuscate.getDecodeChar('a'),
      'n',
      'getDecodeChar("a") is n'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeChar('G23'),
      'T',
      'getDecodeChar("G23") is T23'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeChar('@'),
      'M',
      'getDecodeChar("@") is M'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeChar('Ö'),
      'É',
      'getDecodeChar("Ö") is É'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeChar('4'), 'A', 'getDecodeChar("4") is A');
    // getDecodeString
    assert.equal(
      $.mailDeobfuscate.getDecodeString('nopqrstuvwxyzabcdefghijklm'),
      'abcdefghijklmnopqrstuvwxyz',
      'getDecodeString("abcdefghijklmnopqrstuvwxyz")' +
        ' is nopqrstuvwxyzabcdefghijklm'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeString('Simon'),
      'Fvzba',
      'getDecodeString("Simon") is Fvzba'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeString('abc'),
      'nop',
      'getDecodeString("abc") is nop'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeString('MAIL@example.com'),
      'ZNVY@rknzcyr.pbz',
      'getDecodeString("MAIL@example.com") is ZNVY@rknzcyr.pbz'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeString('foo@bar.name'),
      'sbb@one.anzr',
      'getDecodeString("foo@bar.name") is sbb@one.anzr'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeString('bar-foo@yzzy.com'),
      'one-sbb@lmml.pbz',
      'getDecodeString("bar-foo@yzzy.com") is nopone-sbb@lmml.pbz'
    );
    assert.equal(
      $.mailDeobfuscate.getDecodeString('?dL$kd_ek3Ä'),
      '?qY$xq_rx3Ä',
      'getDecodeString("?dL$kd_ek3Ä) is ?qY$xq_rx3Ä'
    );
  });
  QUnit.test('$.fn.mailDeobfuscate',
   function(assert) {
     var element = // eslint-disable-line no-var
       '<a href="mailto:ZNVY@rknzcyr.pbz" title="">mailto</a>';
    assert.equal(
      typeof $.fn.mailDeobfuscate === 'function',
      true,
      'is function'
    );
    assert.equal(
      typeof $(element).mailDeobfuscate() === 'object',
      true,
      'is object'
    );
    // href
    element =
      '<a href="mailto:ZNVY@rknzcyr.pbz" title="mail to">' +
        'with obfuscated mail address in href' +
      '</a>';
    $('#qunit-fixture').html(element);
    $('#qunit-fixture').find('a').mailDeobfuscate();
    assert.equal(
      $('#qunit-fixture').find('a').attr('href'),
      'mailto:MAIL@example.com',
      'deobfuscated mailto href is mailto:MAIL@example.com'
    );
    // href title
    element =
      '<a href="mailto:nohfr@rknzcyr.arg" title="mail to nohfr@rknzcyr.arg">' +
      'with obfuscated mail address in href and title' +
      '</a>';
    $('#qunit-fixture').html(element);
    $('#qunit-fixture').find('a').mailDeobfuscate();
    assert.equal(
      $('#qunit-fixture').find('a').attr('href'),
      'mailto:abuse@example.net',
      'deobfuscated mailto href is mailto:abuse@example.net'
    );
    assert.equal(
      $('#qunit-fixture').find('a').attr('title'),
      'mail to abuse@example.net',
      'deobfuscated mailto title is mail to abuse@example.net'
    );
    // href title text
    element =
      '<a href="mailto:fvzba-znvy@rknzcyr.BET"' +
        'title="mail to fvzba-znvy@rknzcyr.BET">' +
          'fvzba-znvy@rknzcyr.BET with obfuscated ' +
          'mail address in href and title and text' +
      '</a>';
    $('#qunit-fixture').html(element);
    $('#qunit-fixture').find('a').mailDeobfuscate();
    assert.equal(
      $('#qunit-fixture').find('a').attr('href'),
      'mailto:simon-mail@example.ORG',
      'deobfuscated mailto href is mailto:simon-mail@example.ORG'
    );
    assert.equal(
      $('#qunit-fixture').find('a').attr('title'),
      'mail to simon-mail@example.ORG',
      'deobfuscated mailto title is mail to simon-mail@example.ORG'
    );
    assert.equal(
      $('#qunit-fixture').find('a').text(),
      'simon-mail@example.ORG with obfuscated mail ' +
      'address in href and title and text',
      'deobfuscated mailto title is simon-mail@example.ORG ' +
      'with obfuscated mail address in href and title and text'
    );
    // href no mailto
    element = '<a href="https://www.example.org/" title="mail to">with url in href</a>';
    $('#qunit-fixture').html(element);
    $('#qunit-fixture').find('a').mailDeobfuscate();
    assert.equal(
      $('#qunit-fixture').find('a').attr('href'),
      'https://www.example.org/',
      'not deobfuscated href is https://www.example.org/'
    );
    // href click binded
    element =
      '<a href="mailto:ZNVY@rknzcyr.pbz" title="mail to">' +
        'with obfuscated mail address in href' +
      '</a>';
    $('#qunit-fixture').html(element);
    $('#qunit-fixture')
      .find('a')
      .on('click', function(event) {
        $(event.target).mailDeobfuscate();
      });
    $('#qunit-fixture').find('a').click();
    assert.equal(
      $('#qunit-fixture').find('a').attr('href'),
      'mailto:MAIL@example.com',
      'onClick deobfuscated mailto href is mailto:MAIL@example.com'
    );
  });
  QUnit.moduleDone(function(details) {
    $('#qunit-fixture').html('');
    if (CONSOLE_LOG) {
      console.info( // eslint-disable-line no-console
        'Finished running: ',
          details.name,
        'Failed/total: ',
          details.failed,
          details.total
      );
    }
  });
});
