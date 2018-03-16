/*
 * Concat the site javascript and livereload
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

module.exports = function () {

    return gulp.src(global.paths.src.js.site)
        .pipe(plumber())
        .pipe(concat('global.js'))
        .pipe(gulp.dest(global.paths.dest.js));
};
