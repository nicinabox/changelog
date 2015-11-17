var expect = require('unexpected')
var getRawNotes = require('../lib/getRawNotes')
var getRawSections = require('../lib/getRawSections')
var getParsedSections = require('../lib/getParsedSections')

var FILENAME = './test/CHANGELOG.md'
var notes = '' +
'# 1.1.0' +
'\n\n' +
'* Fix stuff' +
'\n\n' +
'# 1.0.0' +
'\n\n' +
'* Initial release' +
'\n'

describe('parser', function () {
  it('gets raw notes', function (done) {
    getRawNotes(FILENAME, function(raw) {
      expect(raw, 'to equal', notes)
      done()
    })
  })

  it('gets raw sections', function(done) {
    getRawSections(FILENAME, '#', function(sections) {
      expect(sections, 'to be an', 'array')
      done()
    })
  })

  it('gets parsed sections', function(done) {
    getParsedSections(FILENAME, '#', function(sections) {
      expect(sections, 'to be an', 'array')
      expect(sections[0], 'not to be an', 'array')
      expect(sections[0], 'to be a', 'object')
      done()
    })
  })
})
