/*
 * Concat the vendor (foot) javascript and livereload
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

module.exports = function () {

    return gulp.src(global.paths.src.js.vendorFoot)
        .pipe(plumber())
        .pipe(concat('vendor-foot.js'))
        .pipe(gulp.dest(global.paths.dest.js));
};
