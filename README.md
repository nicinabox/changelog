# changelog

A tool for parsing sections from formatted changelogs

**/!\ Not currently published on npm due to naming conflicts.**

## Changelog anatomy

* Sections must begin with with heading identifier (default: `#`)
* Section content is recommended to be a list

See this project's changelog for an example.

## Usage

```javascript
var changelog = require('changelog')([options])
changelog.latest(function(notes) {
  // notes in an array of section objects
})
```

# Options

**filename** `CHANGELOG.md`

The name of your release notes for changelog file.

**headingIdentifier** `#`

The character(s) that identify a heading.

## License

ISC (c) 2015 Nic Aitch
