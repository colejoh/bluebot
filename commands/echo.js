function trigger(message, api, messageObj) {
  threadID = messageObj.threadID;
  api.sendMessage(message, threadID);
}

module.exports = {
  trigger: trigger
}
