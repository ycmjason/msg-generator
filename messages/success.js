var formal_messages = require('./success_formal');
var troll_messages = require('./success_troll');

module.exports = [].concat(formal_messages)
                   .concat(troll_messages);
