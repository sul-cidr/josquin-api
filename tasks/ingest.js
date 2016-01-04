

import _ from 'lodash';
import Promise from 'bluebird';
import db from '../database';


module.exports = function(grunt) {
  grunt.registerTask('ingest', 'Ingest pieces.', function() {

    let done = this.async();

    let docs = _.times(1000).map(function(i) {
      return db.insertAsync({ test: i });
    });

    Promise.all(docs).then(done);

  });
}
