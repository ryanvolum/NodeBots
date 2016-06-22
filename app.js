var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: 'FirstNodeBot', appSecret: '47e106cec1a24cd0854cd28d78b683b8' });
bot.add('/', function (session) {
    session.send('Hello World');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 8080, function () {
    console.log('%s listening to %s', server.name, server.url); 
});