var _ = require('lodash')
var getRawNotes = require('./lib/getRawNotes')
var getParsedSections = require('./lib/getParsedSections')
var matchSection = require('./lib/matchSection')

module.exports = function(options) {
  options = _.extend({
    filename: 'CHANGELOG.md',
    headingIdentifier: '#'
  }, options)

  var api = {
    raw: function (callback) {
      getRawNotes(options.filename, callback)
    },

    latest: function (callback) {
      var section = getParsedSections(options.filename, options.headingIdentifier)
      section(_.compose(callback, _.first))
    },

    matching: function (version, callback) {
      var section = getParsedSections(options.filename, options.headingIdentifier)
      section(_.compose(callback, matchSection(version)))
    }
  }

  return api
}
