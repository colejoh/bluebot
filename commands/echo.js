function trigger(message, api, messageObj) {
  threadID = messageObj.threadID;
  if(message.startsWith('/echo')) {
    api.sendMessage("I aint no fool.", threadID)
  } else {
    api.sendMessage(message, threadID);
  }
}

module.exports = {
  trigger: trigger
}
