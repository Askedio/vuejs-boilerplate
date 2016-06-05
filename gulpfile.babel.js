var gulp = require('gulp');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var html = require('html-browserify');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var environments = require('gulp-environments');
var cleanCSS = require('gulp-clean-css');

var development = environments.development;
var production = environments.production;

gulp.task('default', function () {
    gulp.start('browserify');
    gulp.start('less');
    gulp.start('serve');
});

gulp.task('browserify', function () {
    var bundler = browserify({
        entries: 'src/app.js',
        debug: true,
        insertGlobals: true,
        transform: html
    })
      .transform('node-lessify')
      .transform('babelify')
      .bundle()
      .on('error', function (err) { console.error(err); })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(development(sourcemaps.init({ loadMaps: true })))
      .pipe(production(uglify()))
      .pipe(development(sourcemaps.write('./')))
      .pipe(gulp.dest('src/dist'));
});

gulp.task('less', function(){
      gulp.src(['src/*.less'])
        .pipe(development(sourcemaps.init({ loadMaps: true })))
        .pipe(less())
        .pipe(production(cleanCSS()))
        .pipe(development(sourcemaps.write('./')))
        .pipe(gulp.dest('src/dist'))
        .pipe(browserSync.stream());
});

gulp.task('watchLess', function () {
  watch(['src/*.less', 'src/**/*.less', '!src/dist/*'], batch(function (events, done) {
    gulp.start('less', done);
  }));
});

gulp.task('watch', function () {
  watch(['src/*.js', 'src/**/*.js', 'src/*.html', 'src/**/*.html', '!src/dist/*'], batch(function (events, done) {
    gulp.start('browserify', done);
  }));
});

gulp.task('serve', ['less', 'browserify'], function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });

    gulp.start('watch');
    gulp.start('watchLess');
    gulp.watch("src/dist/app.js").on('change', browserSync.reload);
});

