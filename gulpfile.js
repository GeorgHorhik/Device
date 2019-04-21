const
gulp        = require('gulp'),
rename      = require('gulp-rename'),
postcss     = require('gulp-postcss'),
sugarss     = require('sugarss'),
sorting     = require('postcss-sorting'),
precss      =  require('precss'),
postcssShort = require('postcss-short'),
browserSync = require('browser-sync').create();


var processors = [
  precss(/* options */)
];
var csshort = [
  postcssShort()
];
// Rename Task
function sugar(){
  return gulp.src('app/postcss/main.sss')
  .pipe(postcss([sorting], { parser: sugarss }, [postcssShort()]))
  .pipe(
    postcss([
      precss(/* options */)
    ])
  )
  .pipe(rename('main.css'))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream());
};






function reload(){
  browserSync.init({
    server: {
        baseDir: "./"
    }
    });
    gulp.watch('app/postcss/*.sss', gulp.parallel('sugar'));
    gulp.watch('./*.html').on('change', browserSync.reload);
}


exports.reload = reload;
exports.sugar = sugar;
exports.precss = precss;


gulp.task('default', gulp.parallel(reload))
// [sorting], { parser: sugarss },