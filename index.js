var express = require('express');
var login = require('facebook-chat-api');
var port = 8080;
var app = express();
var config = require('./config.js');

var email = config.email;
var pass = config.pass;

login({email: email, password: pass}, function callback(err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        var messageContent = message.body;
        var thread = message.threadID;
        console.log(message);
	var arr = message.body.split(" ");
	var command = arr[0];
	console.log(command);

        if(command === "/echo") {
            api.sendMessage(messageContent, thread);
        }
    });
});

app.listen(port);
console.log("listening on port: " + port + "...");
