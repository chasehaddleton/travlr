var express = require('express');
var app = express();
var appRootDir = require('app-root-dir').get();
var path = require('path');

//Make public folder public
app.use(express.static('public'));

//jade step
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
   res.render('index');
});

app.get('/nearby-locations', function(res, req){

});


var server = app.listen(process.env.PORT || '8080', function () {
   console.log('App listening on port %s', server.address().port);
   console.log('Press Ctrl+C to quit.');
});