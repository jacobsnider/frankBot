##DESCRIPTION
=============

frankBot is a discord bot that generates gifs of the character Frank Reynolds from the television show *It's Always Sunny In Philadelphia*. Using the command `!frank` the bot will search the Tenor API to find all gifs related to Frank Reynolds and then post one randomly to the channel where the command was made. 

##FEATURES
==========
Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
    -COMPLETED: Line 23 of index.js `let json = await response.json();`

*Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
    -COMPLETED: Lines 21-22 of index.js 

*Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
&
*Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
    -COMPLETED: Lines 25-26 of index.js  
    ```let index = Math.floor(Math.random() * json.results.length);
       message.channel.send(json.results[index].url);```

##SPECIAL INSTRUCTIONS
======================
- Any special instructions required for the reviewer to run your project