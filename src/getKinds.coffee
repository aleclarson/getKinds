
getKind = require "getKind"

module.exports = (type) ->

  types = []

  loop
    types.push type
    break unless type = getKind type

  return types
