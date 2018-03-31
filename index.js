'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.35dcefd4-c245-461d-9d0c-cbb34e10aa42"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Easter Facts';

/**
 * Array containing ice cream facts.
 */
var FACTS = [
	"The tallest Easter egg chocolate was made in Italy in 2011. It stood at 10.39 meters and weighed an astounding 7,200 kg.",
	"The art of painting eggs is called pysanka, which originated in Ukraine. It involves using wax and dyes to color the egg.",
	"The term Easter gets its name from Eastre, the Anglo-Saxon goddess who symbolizes the hare and the egg.",
	"The exchange or giving of Easter eggs actually dates back to before Easter and the giving of eggs is actually considered a symbol of rebirth in many cultures.",
	"There used to be a tradition churches observed that resembled the game of \"hot potato.\" Here, the priest would toss a hard boiled egg to one of the choir boys.",
	"Americans buy more than 700 million marshmallow Peeps during Easter? This makes Peeps the most popular non-chocolate Easter candy.",
	"Americans consume more than 16 million jelly beans during this holiday. That is enough jelly beans to circle the globe not once, not twice, but three times.",
	"Seventy-six percent of people eat the ears on the chocolate bunny first, 5 percent go for the feet and 4 percent for the tail.",
	"During the holiday, more than 90 million chocolate bunnies, 91.4 billion eggs and 700 million Peeps are produced each year in the United States alone.",
	"Next to Halloween, Easter is the biggest candy-consuming holiday of the year.",
	"An estimated $14.7 billion is spent in total for Easter in the US.",
	"The Easter egg is said to symbolize and represent joy, celebration and new life.",
	"Easter is the celebration of the resurrection of Christ; it is the oldest Christian holiday and one of the most important days of the year.",
	"The White House of tradition of the Easter Egg Roll started back in 1878, with President Rutherford B. Hayes!",
	"Workers in Birmingham, who make the famous Cadbury Creme Egg, produce more than 1.5 million egg delights a year.",
	"The idea of the Easter bunny giving candies and eggs is said to have originated in Germany during the middle ages.",
	"The UK's first chocolate egg was produced in 1873 by Fry’s of Bristol.",
	"The first story of a rabbit (later named the “Easter Bunny”) hiding eggs in a garden was published in 1680.",
	"Back in the day, pretzels were often used to celebrate Easter.",
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random ice cream fact from the ice cream facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me an easter fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
