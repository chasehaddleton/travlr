var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());



app.post('/', function(req, res) {

});

app.get('/deals', function(req, res) {
    var lat = req.query.lat;
    var lon = req.query.lon;
    res.send(lat + ',' + lon);
});

app.listen(7883);