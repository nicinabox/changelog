var _ = require('lodash')

module.exports = _.curry(function(version, section) {
  var re = new RegExp(version)

  return _.filter(section, function(section) {
    return (re).test(section.version)
  })[0]
})
