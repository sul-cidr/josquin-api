

require('babel-register');

var debug = require('debug')('josquin');
var app = require('./server');

var server = app.listen(app.get('port'), function() {
  debug('Listening on port ' + server.address().port);
});
