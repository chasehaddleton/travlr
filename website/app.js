var express = require('express');
var app = express();

//Make public folder public
app.use(express.static('public'));

app.get('/', function(req, res){
   res.send('This is a holding page for travlr.');
});

// app.use('/login', require('./routes/login.js'));

var server = app.listen(process.env.PORT || '8080', function () {
   console.log('App listening on port %s', server.address().port);
   console.log('Press Ctrl+C to quit.');
});