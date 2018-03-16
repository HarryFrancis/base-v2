// Load gulp
var gulp = require('gulp');
var tasks = require('./gulp-tasks');
var dest = require('gulp-dest');

// Define paths
var paths = {
    src: {
        browsersync: [
            'src/assets/sass/**/*.scss'
        ],
        sass: {
            site: [
                'src/assets/sass/**/*.scss',
            ],
        },
        js: {
            site: [
                'src/assets/js/site/*.js',
                'src/assets/js/init.js',
            ],
            vendorHead: [
                'src/assets/js/vendor/modernizr-custom.js',
                'src/assets/js/vendor/respond.min.js',
            ],
            vendorFoot: [
                'src/assets/js/vendor/console.js',
            ],
        },
        markup: {
            input: [
                'src/templates/**/*.njk',
                '!src/templates/**/_*.njk',
                '!src/templates/components',
            ],
            inputWatch: [
                'src/templates/**/*.njk',
            ],
        },
    },
    dest: {
        css: 'public/assets/css/',
        js: 'public/assets/js/',
        markup: 'public'
    },
};

// make paths available for external files
global.paths = paths;

// create gulp tasks from external files
Object.keys(tasks).forEach(function (name) {
    gulp.task(name, tasks[name]);
});

gulp.task('css', ['clean-css', 'scss-lint', 'build-sass']);
gulp.task('js', ['clean-js', 'jshint', 'build-scripts-site', 'build-scripts-vendor-head', 'build-scripts-vendor-foot']);
gulp.task('templates', ['clean-markup', 'nunjucks']);

gulp.task('build', ['clean'], function () {
    gulp.start('css', 'js', 'build-scripts-vendor-head', 'build-scripts-vendor-foot', 'nunjucks');
});

gulp.task('watch', ['build'], function () {
    gulp.watch(paths.src.sass.site, ['css']);
    gulp.watch(paths.src.js.site, ['js']);
    gulp.watch(paths.src.js.vendorHead, ['build-scripts-vendor-head']);
    gulp.watch(paths.src.js.vendorFoot, ['build-scripts-vendor-foot']);
    gulp.watch(paths.src.markup.inputWatch, ['nunjucks']);
});

// Set the default task when you run gulp, first clean, then normal functions
gulp.task('default', function () {
    gulp.start('build', 'watch');
});
