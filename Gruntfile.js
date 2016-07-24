/*global module*/
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        less: {
            dev: {
                files: {
                    'css/home.css': 'less/home.less',
                    'css/select.css': 'less/select.less',
                    'css/service.css': 'less/service.less',
                    'css/service-all.css': 'less/service-all.less',
                    'css/ready-work-service-open.css': 'less/ready-work-service-open.less',
                    'css/ready-work-service.css': 'less/ready-work-service.less',
                    'css/ready-work.css': 'less/ready-work.less',
                    'css/price.css': 'less/price.less',
                    'css/conditions.css': 'less/conditions.less',
                    'css/author.css': 'less/author.less'
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