  
'use strict';

var gulp     = require('gulp'),
	babel	 = require('gulp-babel'),
	concat   = require('gulp-concat'),
	rename   = require('gulp-rename'),
	sass     = require('gulp-sass'),
	prefix   = require('gulp-autoprefixer'),
	replace  = require('gulp-replace'),
	cleanCSS = require('gulp-clean-css'),
	uglify   = require('gulp-uglify');

// Set explicit default
sass.compiler = require('node-sass');

var sassOptions = {
  outputStyle: 'compressed'
};

var cssOptions = {
	level: 2,
	format: {
		semicolonAfterLastProperty: true
	}
};

const DIST = {
	styles: 'assets',
	scripts: 'assets'
};

const SOURCE = {
	scripts: [
		'src/js/**/*.js'
	],
	styles: 'src/scss/**/*.scss',
}

gulp.task('scripts', function(){
  return gulp.src(SOURCE.scripts)
		.pipe(concat('scripts.js'))
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(uglify())
		.pipe(rename('scripts.min.js'))
		.pipe(gulp.dest(DIST.scripts));
});

gulp.task('styles', function() {
	return gulp.src(SOURCE.styles)
  		.pipe(sass(sassOptions))
  		.pipe(prefix())
  		.pipe(cleanCSS(cssOptions))
  		.pipe(rename({ suffix: '.min' }))
  		.pipe(gulp.dest(DIST.styles))
});

gulp.task('watch',function() {
  gulp.watch(SOURCE.styles,gulp.parallel('styles'));
  gulp.watch(SOURCE.scripts, gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('styles', 'scripts'));