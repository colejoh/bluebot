function trigger(message, api, messageObj) {
  var index = message.indexOf(' ');
  var language = message.substring(0, index);
  var code = message.substring(index + 1, message.length);

  var retMessage = '```';
  retMessage += ' ' + language + '\n';
  retMessage += code;
 
  api.sendMessage(retMessage, messageObj.threadID);
}

module.exports = {
  trigger: trigger
}
