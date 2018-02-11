'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var minify = require('gulp-minifier');
var replace = require('gulp-replace');

gulp.task('build', function () {
  var version = process.env.APPVEYOR_BUILD_VERSION;

  console.log('build SiteServer.UI started, version: ' + version);

  gulp.src('./SiteServer.UI.nuspec').pipe(replace('$version$', version)).pipe(gulp.dest('./assets'));

  gulp.src('./src/scss/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./src/css'));
  gulp.src('./src/css/siteserver.css').pipe(gulp.dest('./assets/css'));
  gulp.src('./src/css/siteserver.css').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: false,
    minifyCSS: true,
    minifyHTML: false
  })).pipe(rename('siteserver.min.css')).pipe(gulp.dest('./assets/css'));

  gulp.src('./src/fonts/**').pipe(gulp.dest('./assets/fonts'));

  gulp.src('./src/js/**').pipe(gulp.dest('./assets/js'));

  gulp.src('./src/lib/**').pipe(gulp.dest('./assets/css'));

  console.log('build SiteServer.UI successed!');
});