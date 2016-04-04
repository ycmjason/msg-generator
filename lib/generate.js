var msg = {}
require("../types").forEach(function(type){
  msg[type] = require('../messages/'+type);
});

function getListOfMessagesToPickFrom(types){
  var messages = [];
  types.forEach(function(type){
    if(!(type in msg)) return;
    messages = messages.concat(msg[type]);
  });
  if(messages.length <= 0) throw new Error("Given types are all invalid.")
  return messages;
}
function randomPick(arr){
  randomIndex = Math.floor((Math.random()*arr.length));
  return arr[randomIndex];
}

module.exports = function(types){
  var messages = getListOfMessagesToPickFrom(types);
  return randomPick(messages);
}
