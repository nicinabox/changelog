var _ = require('lodash')
var getRawSections = require('./getRawSections')

module.exports = function(filename, callback) {
  getRawSections(filename, function(sections ) {
    callback(_.map(sections, function(s) {
      var version = s.shift().replace(/^#\s*/, '')
      return {
        version: version,
        notes: s.join('\n').trim()
      }
    }))
  })
}
