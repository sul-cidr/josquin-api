

import path from 'path';
import Promise from 'bluebird';
import Datastore from 'nedb';


const db = new Datastore({
  filename: path.join(__dirname, 'data/nedb'),
  autoload: true,
});


export default Promise.promisifyAll(db);
