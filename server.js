

import express from 'express';


const app = express();
app.set('port', process.env.PORT || 3000);


app.get('/api/tree', function(req, res) {
  res.send('tree');
});


module.exports = app;
