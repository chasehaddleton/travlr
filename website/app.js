var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var User = require('./connections');

//Make public folder public
app.use(express.static('public'));

//jade step
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
   res.render('index');
});

app.post('/nearby-locations', function(req, res){

    var userObject = User.returnUser('New', function(err, person){
        console.log(person);
        res.send(person);
    });

    var options = {
        method: 'post',
        body:{
            location:{
                lat: req.body.lat,
                lon: req.body.lon
            },
            keywords: req.body.keywords
        },
        json: true,
        url: 'placeholder'
    };

    request(options, function(err, res, body){
       console.log(body)
    });
});


var server = app.listen(process.env.PORT || '8080', function () {
   console.log('App listening on port %s', server.address().port);
   console.log('Press Ctrl+C to quit.');
});