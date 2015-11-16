var _ = require('lodash')

module.exports = _.curry(function (sectionHeader, nodes) {
  var re = new RegExp('^' + sectionHeader)

  return _.reduce(nodes, function(result, value, index) {
    if ((re).test(value)) result.push([])
    _.last(result).push(value)
    return result
  }, [])
})
