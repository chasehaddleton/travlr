var request = require('request');

var options = {
    method: 'post',
    body: {
        user: {
            name: '',
            interests: ['jazz', 'food', 'golf'],
            location: {lat: 50, lon: 100}
        }
    },
    json: true,
    url: 'http://localhost:25567/suggest/'
};

request(options, function(e, r, body) {
    console.log(body);
    }
);
