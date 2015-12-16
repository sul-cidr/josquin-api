

import _ from 'lodash';
import db from '../database';


module.exports = function(grunt) {
  grunt.registerTask('ingest', 'Ingest pieces.', function() {

    _.times(1000, function(i) {
      db.insert({ test: i }, function(err, doc) {
        console.log(err);
      });
    });

  });
}
