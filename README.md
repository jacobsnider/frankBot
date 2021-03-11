## DESCRIPTION

frankBot is a Discord bot that generates gifs of the character Frank Reynolds from the television show *It's Always Sunny In Philadelphia*. Using the command `!frank` the bot will search the Tenor API to find all gifs related to Frank Reynolds and then post one randomly to the Discord channel where the command was received. 


## FEATURES

###### *Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
    
    - COMPLETED: Lines 21-22 of index.js 
`let url = 'https://g.tenor.com/v1/search?q=frankreynolds&key=${process.env.TENOR_KEY}';`
`let response = await fetch(url);`

###### *Post to an external API and show that it has saved/persisted

    - COMPLETED: Line 25 of index.js
` message.channel.send(json.results[index].url);`

###### *Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
    
    - COMPLETED: Lines 25-26 of index.js  
`let index = Math.floor(Math.random() * json.results.length);`
`message.channel.send(json.results[index].url);`

## SPECIAL INSTRUCTIONS

*Some version of Node is needed to run the bot locally.

1. Have a [Discord](https://discord.com/) Account.
1. Create a server to utilize admin role.
1. Invite frankBot#7886 to this server. 
1. Pull this repository locally. 
1. In a terminal use the CLI `node index.js`
1. The bot should send a console log of "I'm ready", then check the Discord server to make sure frankBot is online. 
1. Any channel of the server frankBot has access to can receive the command `!frank` which will prompt frankBot to return a random gif of Frank Reynolds from the Tenor API. 
1. Close the program in your terminal when finished using frankBot. Sorry, eventually I'll have it hosted 24/7 so it isn't dependent upon using a local machine as a server. 

## USAGE

Name: frankBot
Description: Discord Bot that generates random gifs of Frank Reynolds
License: ISC
Author: Jake Snider

## NOTES

Guides used to help create this project:

[DIGITAL OCEAN](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js)

[CODING TRAIN](https://thecodingtrain.com/learning/bots/discord/05-posting-gifs.html)

[CODING TRAIN YOUTUBE](https://www.youtube.com/watch?v=9P1rB2MY4ZA&ab_channel=TheCodingTrain)

