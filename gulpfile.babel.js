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

gulp.task('default', ['less', 'browserify', 'serve']);

gulp.task('install', ['less', 'browserify']);

gulp.task('browserify', function () {
    var bundler = browserify({
        entries: 'app/app.js',
        paths: ['./node_modules','./app', './resources', './', './components'],
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
      .pipe(gulp.dest('public/assets/js'));
});

gulp.task('less', function(){
      gulp.src(['app/*.less'])
        .pipe(development(sourcemaps.init({ loadMaps: true })))
        .pipe(less())
        .pipe(production(cleanCSS()))
        .pipe(development(sourcemaps.write('./')))
        .pipe(gulp.dest('public/assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('watchLess', function () {
  watch(['resources/assets/**/*.less', 'app/**/*.less', '!app/dist/*'], batch(function (events, done) {
    gulp.start('less', done);
  }));
});

gulp.task('watch', function () {
  watch(['app/*.js', 'app/**/*.js', 'public/*.html', 'resources/**/*.html', 'config/*.js', 'components/**/*.js'], batch(function (events, done) {
    gulp.start('browserify', done);
  }));
});

gulp.task('serve', ['watch', 'watchLess'], function() {
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });

    gulp.watch("public/assets/js/app.js").on('change', browserSync.reload);
});

