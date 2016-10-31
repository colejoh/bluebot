var commands = require('../commands.json');

function trigger(message, api, messageObj) {
 var threadID = messageObj.threadID;
  var helpMessage;
  if(message.length > 1) {
    helpMessage = formDesc(message);
  } else {
    helpMessage = formHelp();
  }
  api.sendMessage(helpMessage, threadID);
}

function formHelp() {
  var usageMessage = '```\nusage: [prefix|/][command] [<args>]\n\n'; 
  for(var command in commands) {
    usageMessage += commands[command].name;
    usageMessage += ' '.repeat(15-commands[command].name.length);
    usageMessage += '[' + commands[command].trigger + ']';
    usageMessage += '\n\n';
  }
  usageMessage += "help <command> lists available subcommands and descriptions" 
  console.log(usageMessage);
  return usageMessage;
}

function formDesc(cmd) {
  var usageMessage = '```\n'; 
  for(var command in commands) {
    if(cmd == commands[command].name) {
      usageMessage += commands[command].name;
      usageMessage += ' '.repeat(15-commands[command].name.length);
      usageMessage += '[' + commands[command].trigger + ']';
      usageMessage += '\n';
      usageMessage += commands[command].description;
    }
  }
  console.log(usageMessage);
  return usageMessage;
}


module.exports = {
  trigger: trigger
}
