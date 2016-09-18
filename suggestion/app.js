//require('@google/cloud-debug');
var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCN9uiUUaOTG4K4X8ucv0iOf1dKlmYEms4'
});

var app = express();
app.use(bodyparser.json());

app.post('/', function(req, res) {
    console.log('post');
    var lat = req.body.lat;
    var lon = req.body.lon;
    var keyword = req.body.keyword;

    googleMapsClient.places(
        {
            query: keyword,
            location: [lat, lon],
            radius: 20,
            opennow: true
        },
        function(err, data) {
            if(err) throw err;

            var response = [];

            data.json.results.forEach(function(result){
                response.push({
                    name: result.name,
                    type: result.types[0],
                    location: result.geometry.location,
                    rating: result.rating,
                    id: result.id
                });
            });

            console.log(response);
            res.send(response);
        }
    );
});

app.listen(process.env.PORT || 8080);
