/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        less: {
            dev: {
                files: {
                    'css/home.css': 'less/home.less'
                }
            }
        },

        watch: {
            files: ['less/**/*.less'],
            tasks: ['less']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);
};