[![tests][tests]][tests-url]
[![coverage][coverage]][coverage-url]
[![maintainability][maintainability]][maintainability-url]

# js.mail.deobfuscate
ES6 class, module and jQuery Plugin which deobfuscate rot13 caesar cipher encoded links.

## npm
[![npm][npm]][npm-url]
```
npm install --save js.mail.deobfuscate
```

## Example

### jQuery plugin
```html
<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/js.mail.deobfuscate/dist/jquery.mail.deobfuscate.min.js"></script>
<script>
  $('a[href^="mailto:"]').each(function (index, value) {
    $(value).on('click', function(event) {
      $(event.target).mailDeobfuscate()
    })
  })
</script>
```

### ES6
```js
import mailDeobfuscate from '../node_modules/js.mail.deobfuscate/dist/mail.deobfuscate.module';

const elements = document.querySelectorAll('a[href⁼"mailto:"]');
elements.forEach(function(element) {
  element.addEventListener('click', function(event) {
    mailDeobfuscate(event.target);
  });
});
```

## Documentation
* [jsDoc](https://exiguus.github.io/js.mail.deobfuscate/)
* [Coverage ES6](https://exiguus.github.io/js.mail.deobfuscate/coverage/es6/)
* [Coverage jQuery](https://exiguus.github.io/js.mail.deobfuscate/coverage/jquery/)

[tests]: https://img.shields.io/travis/exiguus/js.mail.deobfuscate/master.svg
[tests-url]: https://travis-ci.org/exiguus/js.mail.deobfuscate

[maintainability]:
https://api.codeclimate.com/v1/badges/8b7c86a67b5706e9be47/maintainability
[maintainability-url]:
https://codeclimate.com/github/exiguus/js.mail.deobfuscate/maintainability

[coverage]:
https://api.codeclimate.com/v1/badges/8b7c86a67b5706e9be47/test_coverage
[coverage-url]:
https://codeclimate.com/github/exiguus/js.mail.deobfuscate/test_coverage

[npm]: https://img.shields.io/npm/v/js.mail.deobfuscate.svg
[npm-url]: https://npmjs.com/package/js.mail.deobfuscate

[licenses-url]: https://img.shields.io/npm/l/js.mail.deobfuscate.svg
[licenses]: https://github.com/exiguus/js.mail.deobfuscate
