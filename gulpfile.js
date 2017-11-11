var gulp = require('gulp');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-csso');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');

gulp.task('watch', function(){
  gulp.watch('dev/html/*.pug', ['html']);
  gulp.watch('dev/styles/*.sass', ['css']);
  gulp.watch('dev/scripts/*.js', ['babel']);
  gulp.watch('dev/images/*', ['imagemin']);
})

gulp.task('html', function(){
  return gulp.src('dev/html/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
});

gulp.task('css', function(){
  return gulp.src('dev/styles/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
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
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/scripts'))
);

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


gulp.task('default', [ 'html', 'css', 'babel']);
          
