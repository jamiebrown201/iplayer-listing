var express  = require('express');
var app      = express();
var port  	 = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res) {
		res.sendfile('index.html');
});


var server = app.listen(port);
console.log("App listening on port " + port);

exports.closeServer = function(){
  server.close();
};
