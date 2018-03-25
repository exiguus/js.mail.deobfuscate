/* eslint-env jasmine */
// import mailDeobfuscate from './mail.deobfuscate.module'
import mailDeobfuscate from '../../dist/mail.deobfuscate.module'

describe('mailDeobfuscate module', () => {
  it('mailDeobfuscate is function', () => {
    expect(typeof mailDeobfuscate).toBe('function')
  })

  it('deobfuscated mailto href is mail@example.org', () => {
    let markup = '<a href="mailto:znvy@rknzcyr.bet" title="mail to">with obfuscated mail address in href</a>'
    document.body.insertAdjacentHTML('afterbegin', markup)
    let element = document.querySelector('a')
    mailDeobfuscate(element)
    expect(element.href).toBe('mailto:mail@example.org')
    document.body.removeChild(element)
  })

  it('deobfuscated href is http://www.example.org/', () => {
    let markup = '<a href="http://www.example.org/" title="mail to znvy@rknzcyr.bet">with obfuscated mail address in title</a>'
    document.body.insertAdjacentHTML('afterbegin', markup)
    let element = document.querySelector('a')
    mailDeobfuscate(element)
    expect(element.href).toBe('http://www.example.org/')
    document.body.removeChild(element)
  })

  it('deobfuscated title is mail@example.org', () => {
    let markup = '<a href="mailto:znvy@rknzcyr.bet" title="mail to znvy@rknzcyr.bet">with obfuscated mail address in href and title</a>'
    document.body.insertAdjacentHTML('afterbegin', markup)
    let element = document.querySelector('a')
    mailDeobfuscate(element)
    expect(element.title).toBe('mail to mail@example.org')
    document.body.removeChild(element)
  })

  it('deobfuscated text is mail@example.org', () => {
    let markup = '<a href="mailto:znvy@rknzcyr.bet" title="mail to znvy@rknzcyr.bet">znvy@rknzcyr.bet with obfuscated mail address in href, title and text</a>'
    document.body.insertAdjacentHTML('afterbegin', markup)
    let element = document.querySelector('a')
    mailDeobfuscate(element)
    expect(element.text).toBe('mail@example.org with obfuscated mail address in href, title and text')
    document.body.removeChild(element)
  })
})
