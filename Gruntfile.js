var grunt = require('grunt');

grunt.initConfig({
  uglify: {
    my_target: {
      files: {
        'dist/pikachu-injector.min.js': ['./pikachu-injector.js']
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['uglify']);
