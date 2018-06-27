/*
 * Browsersync setup
 */

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function () {
    return browserSync.init({
        server: {
            baseDir: "./public"
        }
	});
};