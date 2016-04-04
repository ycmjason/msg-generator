var generate =  require('./lib/generate');

module.exports = function(){
  // make a proper array from arguments
  types = Array.prototype.slice.call(arguments);
  return generate(types);
};
