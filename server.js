

import express from 'express';
import configExpress from './app/config/express';


const app = express();

// Configure Express.
configExpress(app);


module.exports = app;
