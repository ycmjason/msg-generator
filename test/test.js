var assert = require('assert');
var generate_msg = require('../msg-generator');

describe('generate', function(){
  it('should generate a message from a given type', function(){
    assert(require('../messages/success').indexOf(generate_msg('success')) > -1);
  });
  it('should generate a message from the given types', function(){
    assert(require('../messages/success_formal')
           .concat(require('../messages/success_troll'))
           .indexOf(generate_msg('success_formal', 'success_troll')) > -1);
  });
});

describe('type', function(){
  it('all types should be valid', function(){
    require('../types').forEach(function(type){
      generate_msg(type);
    });
  });
});
