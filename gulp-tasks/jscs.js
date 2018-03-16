/*
 * Lint JS with JSCS (using .jscsrc rules in site root)
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jscs = require('gulp-jscs');

module.exports = function () {

    return gulp.src(global.paths.src.js.site)
        .pipe(plumber())
        .pipe(jscs());
};
