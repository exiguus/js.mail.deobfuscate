import MailDeobfuscate from '../../dist/mail.deobfuscate.class';

describe('mailDeobfuscate class', () => {
  it('mailDeobfuscate is Object', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    expect(typeof mailDeobfuscate).toBe('object');
  });

  it('mailDeobfuscate.decodeChar is function', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    expect(typeof mailDeobfuscate.decodeChar).toBe('function');
  });

  it('mailDeobfuscate.decodeString is function', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    expect(typeof mailDeobfuscate.decodeString).toBe('function');
  });

  it(
    'decode "nopqrstuvwxyzabcdefghijklm" to "abcdefghijklmnopqrstuvwxyz"',
    () => {
      let mailDeobfuscate = new MailDeobfuscate();
      let decoded = mailDeobfuscate.decode('nopqrstuvwxyzabcdefghijklm');
      expect(decoded).toBe('abcdefghijklmnopqrstuvwxyz');
    }
  );

  it('decode "Simon" to "Fvzba"', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    let decoded = mailDeobfuscate.decode('Simon');
    expect(decoded).toBe('Fvzba');
  });

  it('decode "abc" to "nop"', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    let decoded = mailDeobfuscate.decode('abc');
    expect(decoded).toBe('nop');
  });

  it('decode "MAIL@example.com" to "ZNVY@rknzcyr.pbz"', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    let decoded = mailDeobfuscate.decode('MAIL@example.com');
    expect(decoded).toBe('ZNVY@rknzcyr.pbz');
  });

  it('decode "foo@bar.name" to "sbb@one.anzr"', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    let decoded = mailDeobfuscate.decode('foo@bar.name');
    expect(decoded).toBe('sbb@one.anzr');
  });

  it('decode "bar-foo@yzzy.com" to "one-sbb@lmml.pbz"', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    let decoded = mailDeobfuscate.decode('bar-foo@yzzy.com');
    expect(decoded).toBe('one-sbb@lmml.pbz');
  });

  it('decode "?dL$kd_ek3Ä" to "?qY$xq_rx3Ä"', () => {
    let mailDeobfuscate = new MailDeobfuscate();
    let decoded = mailDeobfuscate.decode('?dL$kd_ek3Ä');
    expect(decoded).toBe('?qY$xq_rx3Ä');
  });
});
