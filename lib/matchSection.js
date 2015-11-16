var _ = require('lodash')

module.exports = _.curry(function(version, sections) {
  return _.filter(sections, function(section) {
    var re = new RegExp(version)
    return (re).test(section.version)
  })[0]
})
