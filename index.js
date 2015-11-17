var _ = require('lodash')
var getRawNotes = require('./lib/getRawNotes')
var getParsedSections = require('./lib/getParsedSections')
var matchSection = require('./lib/matchSection')

var Changelog = function(options) {
  if (!(this instanceof Changelog)) {
    return new Changelog(options)
  }

  this.options = _.extend({
    filename: 'CHANGELOG.md',
    headingIdentifier: '#'
  }, options)
}

Changelog.prototype = {
  raw: function (callback) {
    getRawNotes(this.options.filename, callback)
  },

  latest: function (callback) {
    getParsedSections(this.options.filename, this.options.headingIdentifier, function(sections) {
      callback(sections[0])
    })
  },

  matching: function (version, callback) {
    getParsedSections(this.options.filename, this.options.headingIdentifier, function(s) {
      callback(matchSection(version, s))
    })
  }
}

module.exports = Changelog
