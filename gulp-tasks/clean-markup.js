/*
 * Clean js build folder (in case of errors)
 */

var gulp = require('gulp');
var clean = require('del');

module.exports = function () {

    return clean([
        global.paths.dest.root,
        !global.paths.dest.assets + '**/*',
    ]);
};
