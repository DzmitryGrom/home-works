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
                    'css/author.css': 'less/author.less',
                    'css/guarantees.css': 'less/guarantees.less',
                    'css/contacts.css': 'less/contacts.less',
                    'css/news.css': 'less/news.less',
                    'css/about-company.css': 'less/about-company.less',
                    'css/about-company-students.css': 'less/about-company-students.less',
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