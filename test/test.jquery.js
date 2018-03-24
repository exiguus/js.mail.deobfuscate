/* eslint-env qunit */
/*
  global
    $
*/
var CONSOLE_LOG = false
QUnit.module('Test Mail deobfuscate jQuery Plugin', function (hooks) {
  hooks.before(function (assert) {
    $('#qunit-fixture').html('')
    assert.ok(true, 'before called')
  })
  QUnit.test('call hooks', function (assert) {
    assert.expect(1)
  })
  QUnit.moduleStart(function (details) {
    if (CONSOLE_LOG) console.info('Now running: ', details.name)
  })
  QUnit.test('$.mailDeobfuscate', function (assert) {
    assert.equal(typeof $.mailDeobfuscate === 'object', true, 'is object')
    assert.equal(typeof $.mailDeobfuscate.replaceString === 'function', true, 'is function')
    assert.equal(typeof $.mailDeobfuscate.decodeString === 'function', true, 'is function')
    // decodeString
    assert.equal($.mailDeobfuscate.decodeString('a'), 'n', 'decodeString("a") is n')
    assert.equal($.mailDeobfuscate.decodeString('G23'), 'T', 'decodeString("G23") is T23')
    assert.equal($.mailDeobfuscate.decodeString('@'), 'M', 'decodeString("@") is M')
    assert.equal($.mailDeobfuscate.decodeString('Ö'), 'É', 'decodeString("Ö") is É')
    assert.equal($.mailDeobfuscate.decodeString('4'), 'A', 'decodeString("4") is A')
    // replaceString
    assert.equal($.mailDeobfuscate.replaceString('nopqrstuvwxyzabcdefghijklm'), 'abcdefghijklmnopqrstuvwxyz', 'replaceString("abcdefghijklmnopqrstuvwxyz") is nopqrstuvwxyzabcdefghijklm')
    assert.equal($.mailDeobfuscate.replaceString('Simon'), 'Fvzba', 'replaceString("Simon") is Fvzba')
    assert.equal($.mailDeobfuscate.replaceString('abc'), 'nop', 'replaceString("abc") is nop')
    assert.equal($.mailDeobfuscate.replaceString('MAIL@example.com'), 'ZNVY@rknzcyr.pbz', 'replaceString("MAIL@example.com") is ZNVY@rknzcyr.pbz')
    assert.equal($.mailDeobfuscate.replaceString('foo@bar.name'), 'sbb@one.anzr', 'replaceString("foo@bar.name") is sbb@one.anzr')
    assert.equal($.mailDeobfuscate.replaceString('bar-foo@yzzy.com'), 'one-sbb@lmml.pbz', 'replaceString("bar-foo@yzzy.com") is nopone-sbb@lmml.pbz')
    assert.equal($.mailDeobfuscate.replaceString('?dL$kd_ek3Ä'), '?qY$xq_rx3Ä', 'replaceString("?dL$kd_ek3Ä) is ?qY$xq_rx3Ä')
  })
  QUnit.test('$.fn.mailDeobfuscate', function (assert) {
    assert.equal(typeof $.fn.mailDeobfuscate === 'function', true, 'is function')
    assert.equal(typeof $('<a href="mailto:ZNVY@rknzcyr.pbz" title="">mailto</a>').mailDeobfuscate() === 'object', true, 'is object')
    // href
    $('#qunit-fixture').html('<a href="mailto:ZNVY@rknzcyr.pbz" title="mail to">with obfuscated mail address in href</a>')
    $('#qunit-fixture').find('a').mailDeobfuscate()
    assert.equal($('#qunit-fixture').find('a').attr('href'), 'mailto:MAIL@example.com', 'deobfuscated mailto href is mailto:MAIL@example.com')
    // href title
    $('#qunit-fixture').html('<a href="mailto:nohfr@rknzcyr.arg" title="mail to nohfr@rknzcyr.arg">with obfuscated mail address in href and title</a>')
    $('#qunit-fixture').find('a').mailDeobfuscate()
    assert.equal($('#qunit-fixture').find('a').attr('href'), 'mailto:abuse@example.net', 'deobfuscated mailto href is mailto:abuse@example.net')
    assert.equal($('#qunit-fixture').find('a').attr('title'), 'mail to abuse@example.net', 'deobfuscated mailto title is mail to abuse@example.net')
    // href title text
    $('#qunit-fixture').html('<a href="mailto:fvzba-znvy@rknzcyr.BET" title="mail to fvzba-znvy@rknzcyr.BET">fvzba-znvy@rknzcyr.BET with obfuscated mail address in href and title and text</a>')
    $('#qunit-fixture').find('a').mailDeobfuscate()
    assert.equal($('#qunit-fixture').find('a').attr('href'), 'mailto:simon-mail@example.ORG', 'deobfuscated mailto href is mailto:simon-mail@example.ORG')
    assert.equal($('#qunit-fixture').find('a').attr('title'), 'mail to simon-mail@example.ORG', 'deobfuscated mailto title is mail to simon-mail@example.ORG')
    assert.equal($('#qunit-fixture').find('a').text(), 'simon-mail@example.ORG with obfuscated mail address in href and title and text', 'deobfuscated mailto title is simon-mail@example.ORG with obfuscated mail address in href and title and text')
    // href no mailto
    $('#qunit-fixture').html('<a href="https://www.example.org/" title="mail to">with url in href</a>')
    $('#qunit-fixture').find('a').mailDeobfuscate()
    assert.equal($('#qunit-fixture').find('a').attr('href'), 'https://www.example.org/', 'not deobfuscated href is https://www.example.org/')
    // href click binded
    $('#qunit-fixture').html('<a href="mailto:ZNVY@rknzcyr.pbz" title="mail to">with obfuscated mail address in href</a>')
    $('#qunit-fixture').find('a').on('click', function () { $(this).mailDeobfuscate() })
    $('#qunit-fixture').find('a').click()
    assert.equal($('#qunit-fixture').find('a').attr('href'), 'mailto:MAIL@example.com', 'onClick deobfuscated mailto href is mailto:MAIL@example.com')
  })
  QUnit.moduleDone(function (details) {
    $('#qunit-fixture').html('')
    if (CONSOLE_LOG) console.info('Finished running: ', details.name, 'Failed/total: ', details.failed, details.total)
  })
})
