var express = require('express');
var app = express();
var gcloud = require('gcloud')({
    projectId: process.env.GCP_PROJECT
});

var vision = gcloud.vision();
var bodyParser = require('body-parser');

//Make public folder public
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/', function(req, res){
    vision.detectText(req.body.image, {}, function(err, text) {
        if (err) {
            res.send("Error, vision failed.");
        } else {
            res.send({
                text: text.desc
            });
        }
    });
});

app.listen(process.env.port || '3000', function(){
    console.log('App running on a port (or 3000?)');
});