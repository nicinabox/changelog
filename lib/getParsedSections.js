var _ = require('lodash')
var getRawSections = require('./getRawSections')

var parseNotes = function(rawNotes) {
  rawNotes = _.filter(rawNotes, function(n) { return n })
  notes = _.map(rawNotes, function(n) {
    return n.replace(/^[\*-\+]\s+?/, '')
  })
  return notes
}

module.exports = function(filename, headingIdentifier, callback) {
  getRawSections(filename, headingIdentifier, function(sections ) {
    callback(_.map(sections, function(s) {
      var re = new RegExp(['^', headingIdentifier, '\\s*'].join(''))
      var version = s.shift().replace(re, '')

      return {
        version: version,
        body: s.join('\n').trim(),
        notes: parseNotes(s)
      }
    }))
  })
}
