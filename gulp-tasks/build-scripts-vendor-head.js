/*
 * Concat the vendor (head) javascript and livereload
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

module.exports = function () {

    return gulp.src(global.paths.src.js.vendorHead)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('vendor-head.js'))
        .pipe(gulp.dest(global.paths.dest.js));
};
