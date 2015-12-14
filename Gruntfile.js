

require('babel-register');


module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('jit-grunt')(grunt)({
    customTasksDir: 'tasks'
  });

  require('load-grunt-config')(grunt, {
    loadGruntTasks: false,
  });

};
