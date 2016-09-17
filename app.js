var express = require('express');
var app = express();
var request = require('request');
var bodyparser = require('body-parser');
var fs = require('fs');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCN9uiUUaOTG4K4X8ucv0iOf1dKlmYEms4'
});
var Promise = require('promise');
var country = require('countryjs');

googleMapsClient.places()

function code_from_loc(lat, lon) {
    return new Promise(function(fulfill, reject) {
        googleMapsClient.reverseGeocode(
            {
                latlng: [lat,lon]
            },
            function(err, response) {
                if(err) reject(error);
                console.log(response.json.results[0]);
                var street_address = response.json.results[0].formatted_address;
                var country_code = street_address.slice(street_address.length - 2);
                fulfill(country_code);
            }
        );
    });
}

function currency_convert(to, from, amount) {
    return new Promise(function(fulfill, reject) {
        request({
                url: 'https://xecdapi.xe.com/v1/convert_from.json/?to=' + to + '&from=' + from + '&amount=' + amount,
                headers: {
                    "Authorization": auth
                }
            },
            function(error, response, body) {
                if(error) reject(error);

                body = JSON.parse(body);
                console.log(body);
                var output = body.to[0].mid;
                fulfill(String(output));
            }
        );
    });


}


// microservice for currency conversion.
//
// current location, home location, amount.

var auth = '';

app.get('/convert', function(req, res) {
    var lat = req.query.lat;
    var lon = req.query.lon;
    var amount = req.query.amount;

    var lat_home = 1;
    var lon_home = 1;

    var to = 'GBP';

    code_from_loc(lat, lon).done(function(country_code) {
        console.log(country_code);
        console.log(country.info('USA'));
        var currency_code = country.info(country_code).currencies[0];

       currency_convert(to, currency_code, amount).done(function(money_amount) {
           console.log('money amount: ' + money_amount);
          res.send(money_amount);
       });
    });
});

var username = 'hackthenorth070',
    password = 'Waterloo15775',
    url = 'https://xecdapi.xe.com/v1/account_info/';

auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

request({
        url: url,
        headers: {
            "Authorization": auth
        }
    },
    function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('xe auth successful');
        } else {
            console.log('xe auth unsuccessful');
            console.log(response);
        }
    }
);

app.listen(25566);

