## DESCRIPTION

frankBot is a Discord bot that generates gifs of the character Frank Reynolds from the television show *It's Always Sunny In Philadelphia*. Using the command `!frank` the bot will search the Tenor API to find all gifs related to Frank Reynolds and then post one randomly to the Discord channel where the command was received. 


## FEATURES

###### *Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
    
    - COMPLETED: Line 23 of index.js 
`let json = await response.json();`

###### *Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
    
    - COMPLETED: Lines 21-22 of index.js 
`let url = 'https://g.tenor.com/v1/search?q=frankreynolds&key=${process.env.TENOR_KEY}';`
`let response = await fetch(url);`

###### *Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value 
###### *Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
    
    - COMPLETED: Lines 25-26 of index.js  

`let index = Math.floor(Math.random() * json.results.length);`
`message.channel.send(json.results[index].url);`

## SPECIAL INSTRUCTIONS

- Any special instructions required for the reviewer to run your project

## NOTES

Guides used to help create this project:

[DIGITAL OCEAN](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js)

[CODING TRAIN](https://thecodingtrain.com/learning/bots/discord/05-posting-gifs.html)

[CODING TRAIN YOUTUBE](https://www.youtube.com/watch?v=9P1rB2MY4ZA&ab_channel=TheCodingTrain)

