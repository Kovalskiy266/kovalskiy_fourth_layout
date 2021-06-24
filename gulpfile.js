//Льоніний

var gulp = require('gulp'),
  sass = require('gulp-sass')

var paths = {
  styles: {
    src: 'scss/**/*.scss',
    dest: 'css'
  }
};

function styles() {
  return gulp
    .src(paths.styles.src, {
      sourcemaps: true
    })
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

var build = gulp.parallel(styles, watch);

gulp.task(build);
gulp.task('default', build);


// Гайдовський

//  const gulp = require('gulp');
//  const sass = require('gulp-sass');
//  const sourcemaps = require('gulp-sourcemaps');
//  const watch = require('gulp-watch');

//  gulp.task('sass-compile', function(){
//      return gulp.src('./scss/**/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./css/'))
//  })

