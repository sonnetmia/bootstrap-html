var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),    
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'), 
    browserSync = require('browser-sync').create(),   
    addsrc = require('gulp-add-src');

/*

Common Usage of 
.pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))

    .pipe(plumber.stop())
    

 */

gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('uglify', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on('change', browserSync.reload);
});
