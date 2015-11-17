# changelog

A tool for parsing sections from formatted changelogs

## Changelog anatomy

* Sections must begin with with heading identifier (default: `#`)
* Section content is recommended to be a list

See this project's changelog for an example.

## Usage

```javascript
var Changelog = require('changelog')
var changelog = new Changelog([options])
changelog.latest(function(notes) {
  // notes in an array of section objects
})
```

# Options

*filename* `CHANGELOG.md`

The name of your release notes for changelog file.

*headingIdentifier* `#`

The character(s) that identify a heading.

## License

ISC (c) 2015 Nic Aitch
