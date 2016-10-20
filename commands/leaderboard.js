var jsonfile = require('jsonfile');

function trigger(message, api, messageObj) {
  var file = './score.json';
  var score = jsonfile.readFileSync(file);

  score.forEach(function(thread, index){
    if(messageObj.threadID === score[index]['threadID']) {
      var scores = score[index]['scores'];
      var json = JSON.stringify(scores);
      var rep = json.replace(/{/g,'');
      var rep1 = rep.replace(/}/g,'');
      var rep2 = rep1.replace(/"/g,'');
      var rep3 = rep2.replace(/,/g, '\n');
      var rep4 = rep3.replace(/:/g, ': ');
      api.sendMessage(rep4, messageObj.threadID);
    }
  });
}

module.exports = {
  trigger: trigger
}
