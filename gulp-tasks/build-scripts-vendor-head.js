/*
 * Concat the vendor (head) javascript and livereload
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

module.exports = function () {

    return gulp.src(global.paths.src.js.vendorHead)
        .pipe(plumber())
        .pipe(concat('vendor-head.js'))
        .pipe(gulp.dest(global.paths.dest.js));
};
