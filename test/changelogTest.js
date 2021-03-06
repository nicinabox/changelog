var expect = require('unexpected')
var changelog = require('../index')({
  filename: './test/CHANGELOG.md'
})

describe('Changelog', function () {
  it('gets raw notes', function (done) {
    changelog.raw(function(raw) {
      expect(raw, 'to be a', 'string')
      expect(raw, 'to contain', '1.0.0')
      done()
    })
  })

  it('gets latest notes (first section)', function (done) {
    changelog.latest(function(sections) {
      expect(sections, 'to equal', {
        version: '1.1.0',
        body: '* Fix stuff',
        notes: ['Fix stuff']
      })
      done()
    })
  })

  it('gets matched sections (version number)', function (done) {
    changelog.matching('1.0.0', function(sections) {
      expect(sections, 'to equal', {
        version: '1.0.0',
        body: '* Initial release',
        notes: ['Initial release']
      })
      done()
    })
  });
})
