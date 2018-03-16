/*
 * Lint JS with JSHint (using .jshintrc rules in site root)
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');

module.exports = function () {

    return gulp.src(global.paths.src.js.site)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
};
