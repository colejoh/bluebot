var cleverbot = require("cleverbot.io");
var config = require('../config.js');
var bot = new cleverbot(config.cleverBotUser, config.cleverBotAPI);

function trigger(message, api, messageObj) {
  bot.create(function (err, session) {
    bot.setNick("bluebot");
    bot.ask(message, function(err, response) {
      api.sendMessage(response, messageObj.threadID);
    })
  });
}

module.exports = {
  trigger: trigger
}
