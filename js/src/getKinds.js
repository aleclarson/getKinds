var getKind;

getKind = require("getKind");

module.exports = function(type) {
  var types;
  types = [];
  while (true) {
    types.push(type);
    if (!(type = getKind(type))) {
      break;
    }
  }
  return types;
};

//# sourceMappingURL=../../map/src/getKinds.map
