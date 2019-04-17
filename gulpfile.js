// // const ==================================================
var 
    gulp            = require('gulp'),
    postcss         = require('gulp-postcss'),
    cssnext         = require('postcss-cssnext'),
    cssImport       =require ('postcss-import'),
    cssnano         =require('cssnano'),
    fs              =require('fs'),
    preCss          = require('precss'),
    colorFuncion    =require('postcss-color-function'),
    sugarss         = require('sugarss'),
    sorting         = require('postcss-sorting'),
    rename  = require('gulp-rename');

//         var css = fs.readFileSync("app/css/main.css", "utf8")
//     //post css =================================================

//         gulp.task('style', function() {
//             // content
    
//             var
//                 processors = [

//                 cssImport,
//                 cssnext({
//                     'customProperties': true,
//                     'colorFuncion': true,
//                     'customSelectors': true,
                    
//                 }),
//                 preCss({

//                 }),
//                 cssnext({ browsers:[ "> 1%",
//                 "last 2 versions",
//                 "ie >= 11" ] })
//             ]

//         return gulp.src('app/postCSS/main.css')
//             .pipe(postcss(processors,  sugar))
//             .pipe(gulp.dest('app/css'));
//         });
// // precss ==================================================

// gulp.task('sort', function () {
//     return gulp.src('app/postCSS/*.sss')
//         .pipe(postcss([sorting], { syntax: sugarss }))
//         .pipe(gulp.dest('app/css'));
// });
// // watch ===================================================
//         gulp.task('watch', function() {
//         gulp.watch('**/*.css', gulp.parallel('style'));

//     });

// // gulp Default ============================================='
//     gulp.task('default', gulp.parallel('style', 'watch'));

 
gulp.task('style', function () {
    return gulp.src('app/postCSS/*.sss')
        .pipe(postcss(plugins, { parser: sugarss }))
        .pipe(rename({ extname: '.css' }))
        .pipe(gulp.dest('app/css'));
        postcss().process(css, { stringifier: sugarss }).then(function (result) {
            result.content // Converted SugarSS content
        });
});
