var gulp = require('gulp');
var gutil = require("gulp-util");
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-csso');
var babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const eslintConfig = require('eslint-config-gulp');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');

gulp.task('html', function(){
  return gulp.src('dev/html/index.pug')
    .pipe(sourcemaps.init()) //
    .pipe(pug())
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(sourcemaps.write('.')) //
    .pipe(gulp.dest('dist'))
});

gulp.task('css', function(){
  return gulp.src('dev/styles/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(autoprefixer({
      browsers: ['Last 5 versions'], //for last 5 version = 93,12% coverage
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
});

gulp.task('babel', () =>
  gulp.src('dev/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
);

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
    return gulp.src(['dev/scripts/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failAfterError last. 
        .pipe(eslint.failAfterError());
});

gulp.task('imagemin', function(){
  return gulp.src('dev/images/*')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: true}]
    }))
    .pipe(gulp.dest('dist/images'));
});


gulp.task('default', [ 'html', 'css', 'babel', 'lint', 'watch']);
gulp.task('build', [ 'html', 'css', 'babel', 'lint', 'imagemin']);
gulp.task('watch', function(){
  gulp.watch('dev/html/*.pug', ['html']);
  gulp.watch('dev/styles/*.sass', ['css']);
  gulp.watch('dev/scripts/*.js', ['babel', 'lint']);
  gulp.watch('dev/images/*', ['imagemin']);
})