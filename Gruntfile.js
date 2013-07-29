module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: [
      '/*!',
      ' * <%= pkg.name %> - v<%= pkg.version %>',
      ' *',
      ' * <%= grunt.template.today("yyyy-mm-dd") %>',
      ' *',
      ' * <%= pkg.description %>',
      ' *',
      ' * <%= pkg.homepage %>',
      ' *',
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;',
      ' *',
      ' * Licensed <%= pkg.license %>',
      '**/'
    ].join('\n') + '\n',

    uglify: {
      swear: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/console-swear-<%= pkg.version %>.min.js': ['src/console-swear.js']
        }
      }
    }
  });

};