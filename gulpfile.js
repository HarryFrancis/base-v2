// Load gulp
var gulp = require('gulp');
var tasks = require('./gulp-tasks');
var dest = require('gulp-dest');

// Define paths
var paths = {
    src: {
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
                'src/assets/js/vendor/head/*.js',
            ],
            vendorFoot: [
                'src/assets/js/vendor/foot/*.js',
            ],
        },
        markup: {
            input: [
                'src/templates/**/*.njk',
                '!src/templates/**/_*.njk',
            ],
            inputWatch: [
                'src/templates/**/*.njk',
            ],
        },
        fonts: 'src/assets/fonts/**/*',
        images: 'src/assets/images/**/*',
        icons: 'src/assets/icons/**/*',
        fontsDir: 'src/assets/fonts/',
        imagesDir: 'src/assets/images/',
        iconsDirRetina: 'src/assets/icons/*@2x.png',
        iconsDir: 'src/assets/icons/',
    },
    dest: {
        images: 'public/assets/images/',
        fonts: 'public/assets/fonts/',
        icons: 'public/assets/icons/',
        css: 'public/assets/css/',
        js: 'public/assets/js/',
        assets: 'public/assets/',
        root: 'public',
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
gulp.task('templates', ['nunjucks']); // To add - Get clean working
gulp.task('other', ['fonts', 'images', 'icons']);

gulp.task('build', ['clean', 'other'], function () {
    gulp.start('css', 'js', 'templates', 'browser-sync');
});

gulp.task('watch', ['build'], function () {
    gulp.watch(paths.src.markup.inputWatch, ['templates']);
    gulp.watch(paths.src.fonts, ['fonts']);
    gulp.watch(paths.src.icons, ['icons']);
    gulp.watch(paths.src.images, ['images']);
    gulp.watch(paths.src.sass.site, ['css']);
    gulp.watch(paths.src.js.site, ['js']);
    gulp.watch(paths.src.js.vendorHead, ['build-scripts-vendor-head']);
    gulp.watch(paths.src.js.vendorFoot, ['build-scripts-vendor-foot']);
});

// Set the default task when you run gulp, first clean, then normal functions
gulp.task('default', function () {
    gulp.start('build', 'watch');
});
