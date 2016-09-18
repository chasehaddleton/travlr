var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function distanceBetween(lon1, lat1, lon2, lat2) {
    var R = 6371e3; // metres
    var angle1 = lat1.toRadians();
    var angle2 = lat2.toRadians();
    var deltaAngle1 = (lat2 - lat1).toRadians();
    var deltaAngle2 = (lon2 - lon1).toRadians();

    var a = Math.sin(deltaAngle1 / 2) * Math.sin(deltaAngle1 / 2) +
        Math.cos(angle1) * Math.cos(angle2) *
        Math.sin(deltaAngle2 / 2) * Math.sin(deltaAngle2 / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

app.post('/', function (req, res) {
    var latitude = req.body.location.lat;
    var longitude = req.body.location.lon;
    var keywords = req.body.keywords;

    var search = keywords[getRandom(0, (keywords.length - 1))];

    var options = {
        method: 'post',
        body: {
            lat: latitude,
            lon: longitude,
            keyword: search
        },
        json: true,
        url: 'http://suggestion-dot-hackthenorth16-1577.appspot.com/'
    };

    request(options, function (error, response, body) {
            if (error) {
                console.log(error);
            }
            var result = {};
            for (i = 0; i < 3; i++) {
                var cur = body[i];
                result.push({
                    id: cur.id,
                    name: cur.name,
                    rating: cur.rating,
                    distance: Math.abs(distanceBetween(cur.location.lon, cur.location.lat, latitude, longitude)),
                    location: {
                        lat: cur.location.lat,
                        lng: cur.location.lon
                    }
                });
            }
            res.send(result);
        }
    );
});

var server = app.listen(process.env.PORT || '8080', function () {
    console.log('App listening on port %s', server.address().port);
    console.log('Press Ctrl+C to quit.');
});