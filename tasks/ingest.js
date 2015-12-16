

import _ from 'lodash';
import db from '../database';


console.log(db);


module.exports = function(grunt) {
  grunt.registerTask('ingest', 'Ingest pieces.', function() {

    _.times(1000, function(i) {
      db.insert({ notes: ['A', 'B', 'D'] }, function(err, doc) {
        console.log(err);
      });
    });

  });
}
