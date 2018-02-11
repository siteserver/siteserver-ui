'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var minify = require('gulp-minifier');
var replace = require('gulp-replace');

gulp.task('build', function () {
  var version = process.env.APPVEYOR_BUILD_VERSION;

  console.log('build SiteServer.UI started, version: ' + version);

  gulp.src('./src/scss/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./src/css'));
  gulp.src('./src/css/siteserver.css').pipe(gulp.dest('./dist/css'));
  gulp.src('./src/css/siteserver.css').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: false,
    minifyCSS: true,
    minifyHTML: false
  })).pipe(rename('siteserver.min.css')).pipe(gulp.dest('./dist/css'));

  gulp.src('./src/fonts/**').pipe(gulp.dest('./dist/fonts'));

  gulp.src('./src/lib/**').pipe(gulp.dest('./dist/css'));

  gulp.src('./package.json').pipe(replace('$version$', version)).pipe(gulp.dest('./'));

  console.log('build SiteServer.UI successed!');
});