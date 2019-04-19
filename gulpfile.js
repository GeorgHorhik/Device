const
    gulp              = require('gulp'),
    rename            = require('gulp-rename'),
    postcss           = require('gulp-postcss'),
    sugarss           = require('sugarss'),
    sorting           = require('postcss-sorting'),
    precss            =  require('precss'),
    postcssShort      = require('postcss-short'),
    cssnext           = require('cssnext'),
    autoprefixer      =require('autoprefixer'),
    browserSync       = require('browser-sync').create();

var processors = [
  precss(/* options */)
];
// Rename Task
function sugar(){
  return gulp.src('app/postcss/main.sss')
  .pipe(postcss([sorting], { parser: sugarss }, [ autoprefixer() ]))
  .pipe(cssnext({
        compress: true
    }))
  .pipe(
  postcss([
    postcssShort(/* pluginOptions */)
  ]))
  .pipe(
    postcss([
      precss(/* options */)
    ])
  )
  .pipe(rename('main.css'))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream());
};


function browser_sync () {
  // sddf...
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}



function watch(){
gulp.watch('app/postcss/*.sss', gulp.parallel('sugar'));
gulp.watch("*.html").on('change', browserSync.reload);
}
exports.watch           = watch;
exports.browser_sync    = browser_sync;
exports.sugar           = sugar;
exports.precss          = precss;

// [sorting], { parser: sugarss },