/*
 * Lint JS with JSHint (using .jshintrc rules in site root)
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var scsslint = require('gulp-scss-lint');

module.exports = function () {

    return gulp.src(global.paths.src.sass.site)
        .pipe(plumber())
        .pipe(scsslint({
            'maxBuffer': 30007200,
            'config': 'scss-lint.yml'
        }));
};
