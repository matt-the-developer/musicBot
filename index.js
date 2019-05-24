//dependency import
const discord = require('discord.js');
const {
    prefix,
    token,
} = require('./config.json');
const ytdl = require('ytdl-core');

const client = new discord.Client();
client.login(token);

//basic listeners that console.log when executed

client.once('ready', () => {
    console.log('Ready!');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!')
});

//read messages
client.on('message', async message => {

});

//check if the author of the message is our bot and return if it is
if (message.author.bot) return;
//check if the message starts with the prefix, return if it doesn't
if (!message.content.startsWith(prefix)) return;

//check which command we need to execute
// need to add code here - 5/23/2019