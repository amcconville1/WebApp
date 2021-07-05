// Kaden's Commit
var request = require('request');
var query = 'English';
var url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&format=json`;
request(url, function(err, response, body) {
    if (err) {
        var error = "cannot connect to server";
        console.log(error);
    } else {
        console.log('body: ', body);
    }
});
