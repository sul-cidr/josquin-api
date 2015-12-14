

import express from 'express';
import db from './database';


const app = express();
app.set('port', process.env.PORT || 3000);


// TODO|dev
db.insert({ notes: ['A', 'B', 'C'] }, function(err, doc) {
  console.log(doc);
});


app.get('/api/tree', function(req, res) {
  res.send('tree');
});


module.exports = app;
