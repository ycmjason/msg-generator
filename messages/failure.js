var formal_messages = require('./failure_formal');
var troll_messages = require('./failure_troll');
var offensive_messages = require('./failure_offensive');

module.exports = [].concat(formal_messages)
                   .concat(troll_messages)
                   .concat(offensive_messages);
