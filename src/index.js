// app
import mailDeobfuscate from './js/mail.deobfuscate.module'

const elements = document.querySelectorAll('a')
elements.forEach(function (element) {
  element.addEventListener('click', function () {
    mailDeobfuscate(this)
  })
})
