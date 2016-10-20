var jsonfile = require('jsonfile')

function trigger(message, api, messageObj) {
  var file = './score.json';
  var score = jsonfile.readFileSync(file);
  var isThread = false;
  var counter = 0;
  message = message.charAt(0).toUpperCase() + message.slice(1);
  score.forEach(function(thread, index) {
    counter++;
    if(messageObj.threadID === score[index]['threadID']) {
      isThread = true;
      var threadScore = score[index]['scores'];

      // If person exists add to their score, else add the person
      if(message in threadScore) {
        var personScore = threadScore[message] - 1;
        threadScore[message] = personScore;
      } else {
        threadScore[message] = -1;
      }   

      // Optimistic Coding for return
      var upMessage = message.charAt(0).toUpperCase() + message.slice(1);
      var retMessage = upMessage + " is now at " + threadScore[message] + " points.";

      //rewrites file
      jsonfile.writeFileSync(file, score);
    
      api.sendMessage(retMessage, messageObj.threadID);
    }   
  }); 

  if(!isThread) {
    score[counter] = { 
      "threadID": messageObj.threadID,
      "scores": {}, 
      "updated": Date.now()
    };  
    score[counter]['scores'][message] = -1;
    var retMessage = message.charAt(0).toUpperCase() + message.slice(1) + " is now at -1 points.";
    api.sendMessage(retMessage, messageObj.threadID);
    jsonfile.writeFileSync(file, score);
  }   
}

module.exports = { 
  trigger: trigger
}
