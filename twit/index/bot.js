console.log("hello this is ur bot speaking! you just woke me up!!");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

//somebody follows you
stream.on('follow', tweetEvent);

function tweetEvent(eventMsg) {


    // console.log("somebody follows!");
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    Autotweet('.@' + screenName + ' thanks to u i feel less sad');

}


Autotweet();
setInterval(Autotweet, 1000 * 5 * 60);

function Autotweet(txt) {
    var r = Math.floor(Math.random() * 1000);
    var tweet = {
        status: 'i got ' + r + ' problems'
    };

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log("something went wrong hoe");
        } else {
            console.log("it worked!");
        }

    }
}



/*var params = {
q: 'birthday',
    count: 2
}
//T.get('search/tweets', params, gotData);
//function gotData(err, data, response) {
var tweets = data.statuses;
for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
}
}
*/
