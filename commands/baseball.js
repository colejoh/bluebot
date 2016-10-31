function trigger(message, api, messageObj) {
  threadID = messageObj.threadID;
  api.sendMessage("Fuck the cubs", threadID);
}

module.exports = {
  trigger: trigger
}
