var express = require('express');
var login = require('facebook-chat-api');
var port = 8080;
var app = express();
var config = require('./config.js');

var email = config.email;
var pass = config.pass;

var score = {};

login({email: email, password: pass}, loginCallback);


// parse messages for handling
function loginCallback(err, api) {
  if(err) return console.error(err);

  api.listen(function callback(err, message) {
    // Comand defined as starting with /
    if(isCommand(message)) {
      var commandString = message.body.slice(1);
      console.log(commandString);
      var trigger = commandString.substring(0, endOfCmd(commandString));

      if(trigger == "echo") {
        var messageBody = message.body.substring(trigger.length + 1);  
        api.sendMessage(messageBody, message.threadID);
      }
      
    }
  });
}


// determine the end of the command
function endOfCmd(cmd) {
  if(cmd.indexOf(' ') > 0) {
    return cmd.indexOf(' ');
  } else {
    return cmd.length;
  }
}

// determine if a received message is a command
function isCommand(message) {
  if (!(message && message.body)) {
    return false;
  } else {
    return message.body.startsWith('/');
  }
}

app.listen(port);
console.log("listening on port: " + port + "...");
