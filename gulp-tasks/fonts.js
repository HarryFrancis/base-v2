/*
 * Copy fonts into public
 */

var gulp = require('gulp');

module.exports = function () {
    return gulp.src(global.paths.src.fonts)
		.pipe(gulp.dest(global.paths.dest.fonts));
};