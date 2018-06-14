var express = require('express')

var app = express()

app.use(express.static('./dist'))

var post = process.env.PORT || 9999

var server = app.listen(post, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Yu Travel app listening at http://%s:%s', host, port);
});
