var _ = require('lodash')

module.exports = _.curry(function (headingIdentifier, nodes) {
  var re = new RegExp('^' + headingIdentifier)

  return _.reduce(nodes, function(result, value, index) {
    if ((re).test(value)) result.push([])
    _.last(result).push(value)
    return result
  }, [])
})
