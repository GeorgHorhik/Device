const
gulp        = require('gulp'),
rename      = require('gulp-rename'),
postcss     = require('gulp-postcss'),
sorting     = require('postcss-sorting'),
precss      =  require('precss'),
postcssShort = require('postcss-short'),
stylus      = require('gulp-stylus'),
browserSync = require('browser-sync').create();

'use strict';
function css(){
  return gulp.src('./app/stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
};


gulp.task('autoprefixer', function () {
  var sourcemaps   = require('gulp-sourcemaps');
  var autoprefixer = require('autoprefixer');

  return gulp.src('./app/*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./app/css'));
});

function reload(){
  browserSync.init({
    server: {
        baseDir: "./"
    }
    });
    gulp.watch('app/stylus/*.styl', gulp.series('css', 'autoprefixer'));
    gulp.watch('./*.html').on('change', browserSync.reload);
}


exports.reload = reload;
exports.css    = css;

gulp.task('default', gulp.parallel(reload))
// [sorting], { parser: sugarss },