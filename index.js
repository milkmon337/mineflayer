const Discord = require('discord.js');
const mineflayer = require('mineflayer');
const chalk = require('chalk');
const client = new Discord.Client();
const config = require("./config.json");

let token = config.token;
let sending = false;
let chatData = [];

let bot = mineflayer.createBot({
	version: config.version,
	host: config.ip,
	username: config.username,
	loggedIn: true,
	ignoreRepeat: false,
	logErrors: false,
	checkTimeoutInterval: 30*1000
})

client.once('ready', () => {
	console.log(chalk.magenta('============================'))
	console.log(chalk.magenta('Bot, by programador Jaopz#0000'))
	console.log(chalk.green('connected Servidor discord...'));
	console.log(chalk.magenta('============================'))
});

bot.on('ready', () => {
	console.log('connected Servidor do Minecraft...');
	bot.chat("Olá pessoal, Sou um bot configurado pra responder qualquer pergunta");
})

bot.on("message", message => {
	let channel = client.channels.cache.get("813088611091349525")
	if (!channel) return;
	channel.send("```"+message.toString()+"```")
	    console.log(message.toAnsi());
})

bot.on('motivos', function(reason) {
    console.log('motivo do: ' + reason);
});

bot.on('health', function() {
    console.log(chalk.bgMagenta('health: ' + bot.health));
    console.log(chalk.bgMagenta('hunger: ' + bot.food));
    console.log(chalk.bgMagenta('foodSaturation: ' + bot.foodSaturation));
});


/*
*bot.on('chat', (vip,username, message, rawMessage) => {
*  console.log(`vip: ${vip}`)
*
*})


bot.on('chat', (username, message, type, rawMessage, matches) => {
  if (username === bot.username) return;
    console.log(`alguem rep?`)
        bot.chat("/tell bielgamepvp12 vamos jogar?")
})
*/


bot.on('login', function() {
    console.log("Bot connected!");
    bot.chat("/register 36433643");
    bot.chat("/login 36433643");
    //bot.setControlState('forward', true);
});

client.login(token);