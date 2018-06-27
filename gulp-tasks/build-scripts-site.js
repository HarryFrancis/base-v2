/*
 * Concat the site javascript and livereload
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

module.exports = function () {

    return gulp.src(global.paths.src.js.site)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('global.js'))
        .pipe(gulp.dest(global.paths.dest.js));
};
