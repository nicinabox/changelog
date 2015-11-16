var _ = require('lodash')
var toSections = require('./toSections')
var splitNewLine = require('./splitNewLine')
var getRawNotes = require('./getRawNotes')

module.exports = function(filename, callback) {
  getRawNotes(filename, function(raw) {
    callback(toSections('#', splitNewLine(raw)))
  })
}
