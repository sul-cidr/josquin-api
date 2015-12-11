

import { tree } from '../controllers/api';


export default function(app) {
  app.get('/api/tree', tree);
};
