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


// guild represent an isolated collection of users and channels and is often referred to as a server // Guild means Server in Discord.js
//check which command we need to execute and call the command
const serverQueue = queue.get(message.guild.id);

if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
}else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
}else if (message.content.startsWith(`${prefix}stop`)){
    stop (message, serverQueue);
    return;
} else {
    //if input isn't valid send() function sends an error message
    message.channel.send('You need to enter a valid command!');
};
