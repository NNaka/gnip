var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// taken from http://stackoverflow.com/questions/16895047/any-way-to-serve-static-html-files-from-express-without-the-extension
var fs        = require('fs');
var publicdir = __dirname + '/public';

app.use(function(req, res, next) {
  if (req.path.indexOf('.') === -1) {
    var file = publicdir + req.path + '.html';
    fs.exists(file, function(exists) {
      if (exists)
      req.url += '.html';
    next();
    });
  }
  else
  next();
});
app.use(express.static(publicdir));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


