/*
 * Compile the sass + autoprefix + pixrem + livereload
 */

var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var rename = require('gulp-rename');

module.exports = function () {
    return gulp.src(global.paths.src.markup.input)
		.pipe(nunjucks.compile())
		.pipe(rename({ extname: '.html' }))
		.pipe(gulp.dest(global.paths.dest.markup));
};