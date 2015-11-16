var expect = require('unexpected')
var Changelog = require('../index')

describe('Changelog', function () {
  var changelog

  beforeEach(function() {
    changelog = new Changelog({
      filename: './test/CHANGELOG.md'
    })
  })

  it('initializes with options', function () {
    expect(changelog.options, 'to equal', {
      filename: './test/CHANGELOG.md',
      section: '#'
    })
  })

  it('gets raw notes', function (done) {
    changelog.raw(function(raw) {
      expect(raw, 'to be a', 'string')
      expect(raw, 'to contain', '1.0.0')
      done()
    })
  })

  it('gets latest notes (first section)', function (done) {
    changelog.latest(function(sections) {
      expect(sections, 'to equal', [
        { version: '1.1.0', notes: '* Fix stuff' },
        { version: '1.0.0', notes: '* Initial release' }
      ])
      done()
    })
  })

  it('gets matched sections (version number)', function (done) {
    changelog.matching('1.0.0', function(sections) {
      expect(sections, 'to equal', {
        version: '1.0.0', notes: '* Initial release'
      })
      done()
    })
  });
})
