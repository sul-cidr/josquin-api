

import path from 'path';
import Datastore from 'nedb';


export default new Datastore({
  filename: path.join(__dirname, 'data/nedb'),
  autoload: true,
});
