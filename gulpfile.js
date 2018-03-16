// Load gulp
var gulp = require('gulp');
var tasks = require('./gulp-tasks');
var dest = require('gulp-dest');

// Define paths
var paths = {
    src: {
        sass: {
            site: [
                'assets/sass/**/*.scss'
            ]
        },
        js: {
            site: [
                'assets/js/site/*.js',
                'assets/js/init.js'
            ],
            vendorHead: [
                'assets/js/vendor/modernizr-custom.js',
                'assets/js/vendor/respond.min.js'
            ],
            vendorFoot: [
                'assets/js/vendor/console.js'
            ]
        }
    },
    dest: {
        css: 'public/assets/css/',
        js: 'public/assets/js/'
    }
};

// make paths available for external files
global.paths = paths;

// create gulp tasks from external files
Object.keys(tasks).forEach(function (name) {
    gulp.task(name, tasks[name]);
});

gulp.task('css', ['clean-css', 'scss-lint', 'build-sass']);
gulp.task('js', ['clean-js', 'jshint', 'build-scripts-site', 'build-scripts-vendor-head', 'build-scripts-vendor-foot']);

gulp.task('build', ['clean'], function () {
    gulp.start('css', 'js', 'build-scripts-vendor-head', 'build-scripts-vendor-foot');
    gulp.start('css');
});

gulp.task('watch', ['build'], function () {
    gulp.watch(paths.src.sass.site, ['css']);
    gulp.watch(paths.src.js.site, ['js']);
    gulp.watch(paths.src.js.vendorHead, ['build-scripts-vendor-head']);
    gulp.watch(paths.src.js.vendorFoot, ['build-scripts-vendor-foot']);
});

// Set the default task when you run gulp, first clean, then normal functions
gulp.task('default', function () {
    gulp.start('build', 'watch');
});
