var giphy = require('giphy-api')();

function trigger(search, api, message) {
  threadID = message.threadID;
  giphy.random(search, function(err, res) {
    if (err) return console.error(err);
    var msg = {
      body: res.data.caption || "For some reason this doesn't work on m.me",
      url: res.data.image_original_url
    };
    api.sendMessage(msg, threadID);
  });
}

module.exports = {
  trigger: trigger
}
