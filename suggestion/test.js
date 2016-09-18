var request = require('request');

var options = {
    method: 'post',
    body: {
        
            "lat": 79,
            "lon": 49,
            "keyword": "chinese"
        
    },
    json: true,
    url: 'http://localhost:4444/'
};

request(options, function(e, r, body) {
    console.log(body);
});
