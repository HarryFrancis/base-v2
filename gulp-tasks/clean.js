/*
 * Clean build folders
 */

var gulp = require('gulp');
var clean = require('del');

module.exports = function () {

    return clean([
        global.paths.dest.css,
        global.paths.dest.js,
        global.paths.dest.markup,
    ]);
}; 
