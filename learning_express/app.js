var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

// npm install ejs --save
app.set('view engine', 'ejs');


app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

// app.post('/personjson', jsonParser, function (req, res) {
//     res.send('Thank you for JSON data!');  
//     console.log(req.body.firstname);
//     console.log(req.body.lastname);
// });

// app.get('/', function (req, res) {
//     console.log('Accepted from middleware !');
//     res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>Hello World !!!</h1></body></html>');
// });

// app.get('/person/:id', function (req, res) {
//     res.send('<html><head></head><body><h1>Person : ' + req.params.id +  '</h1></body></html>');
// });

// app.get('/api', function (req, res) {
//     res.json( { firstname: 'John', lastname: 'Doe'} );
// });

htmlController(app);

apiController(app);

app.listen(port);