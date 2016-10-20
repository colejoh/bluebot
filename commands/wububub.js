function trigger(message, api, messageObj) {
  threadID = messageObj.threadID;
  api.sendMessage("wow", threadID);
}

module.exports = {
  trigger: trigger
}
