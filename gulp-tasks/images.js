/*
 * Minify images
 */

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = function () {
    return gulp.src(global.paths.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(global.paths.dest.images))
};