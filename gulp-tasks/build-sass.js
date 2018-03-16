/*
 * Compile the sass + autoprefix + pixrem + livereload
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function () {
    return gulp.src(global.paths.src.sass.site)
        .pipe(plumber())
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'ie 8', 'ie 9', 'Opera 12.1', 'Android 4'))
        .pipe(gulp.dest(global.paths.dest.css));
};
