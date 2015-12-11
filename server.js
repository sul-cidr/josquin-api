

import express from 'express';

import configExpress from './app/config/express';
import configRoutes from './app/config/routes';


const app = express();

configExpress(app);
configRoutes(app);


module.exports = app;
