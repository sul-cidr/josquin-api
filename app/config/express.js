

import path from 'path';
import express from 'express';


export default function(app) {

  let root = path.resolve(__dirname, '../..');
  let env = process.env.NODE_ENV || 'development';

  // Assign the port.
  app.set('port', process.env.PORT || 3000);

};
