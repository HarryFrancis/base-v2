/*
 * Generate an icon font
 */

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');

module.exports = function () {
	var spriteData = gulp.src(global.paths.src.icons).pipe(spritesmith({
  		retinaSrcFilter: [global.paths.src.iconsDirRetina],
		  imgName: 'sprite.png',
	  	retinaImgName: 'sprite@2x.png',
		  cssName: '_components.sprites.scss'
	}));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    .pipe(gulp.dest(global.paths.src.imagesDir));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(gulp.dest('src/assets/sass/components'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
};
