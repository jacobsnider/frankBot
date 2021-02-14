const Discord = require("discord.js");
const config = require("./config.json");
const fetch = require("node-fetch");
require("dotenv").config();

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord => console.log(`I'm ready!`));

const prefix = "!";

client.on("message", async function(message) {
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (command === "frank") {
        let url = `https://g.tenor.com/v1/search?q=frankreynolds&key=${process.env.TENOR_KEY}`;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        let index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);
        // const timeTaken = Date.now() - message.createdTimestamp;
        // message.reply(`Don't know how much time I have left. Gonna get real weird with it.`);
    }
});