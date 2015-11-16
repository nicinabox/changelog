var fs = require('fs')
var _ = require('lodash')

module.exports = _.curry(function (filename, callback) {
  fs.readFile(filename, 'utf-8', function(err, result) {
    if (err) throw err
    callback(result)
  })
})
