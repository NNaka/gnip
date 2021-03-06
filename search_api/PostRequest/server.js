// Initialization
var express     = require( 'express' );
var request     = require( 'request');
var bodyParser  = require( 'body-parser' ); // Required if we need to use HTTP query or post parameters
var btoa        = require( 'btoa' );
var app         = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP query or post parameters

// Serve static content
app.use(express.static(__dirname + '/public'));

// Views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Full-Archive Search POST request handler
app.post('/search.json', function(req, res) {
  var url   = 'ENTER_API_URL_HERE';
  var UN    = 'ENTER_USERNAME_HERE';
  var PWD   = 'ENTER_PASSWORD_HERE';

  var token = 'Basic ' + btoa(UN + ":" + PWD);
  var query = 'gnip';

  var queryString = '{"query":"' + query + '","maxResults":"10"}';

  // Set up the request
  request({
    uri     : url,
    method  : "POST",
    body    : queryString,
    headers : { "Authorization" : token }
  }, function(error, response, body) {
    res.send(body);
  });
});

app.listen(process.env.PORT || 5000);
