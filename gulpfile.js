var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),    
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'), 
    browserSync = require('browser-sync'), 
    reload = browserSync.reload,
    del = require('del'),
    addsrc = require('gulp-add-src');

// ///////////////////////////////////////
// Managing All js files 
// ///////////////////////////////////////
gulp.task('scripts', function() {
    gulp.src(['js/*.js', '!js/*.min.js'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
     }}))  
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(gulp.dest('js'))
    .pipe(reload({stream:true}));
});

// ///////////////////////////////////////
// Compass Sass Scss Tasks 
// ///////////////////////////////////////

gulp.task('compass',function(){
    gulp.src('scss/*.scss')
    .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
    }}))
    .pipe(compass({
        config_file: './config.rb',
        css: 'css',
        sass: 'scss',
        image: 'images',
        require: ['susy']
    }))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('css'))
    .pipe(reload({stream:true}));

});
// ///////////////////////////////////////
// html Task Runner for LIVE RELOAD 
// ///////////////////////////////////////

gulp.task('html',function(){
    gulp.src('*.html')
    .pipe(reload({stream:true}));
});

// ///////////////////////////////////////
// Static server for LIVE RELOAD 
// ///////////////////////////////////////
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


// ////////////////////////////////////////////////
// Build Tasks
// // /////////////////////////////////////////////

// clean out all files and folders from build folder
gulp.task('build:clean', function (cb) {
    del([
        'vendor/**'
    ], cb);
});

// task to create build directory of all files
gulp.task('build:bootstrap', function(){
    return gulp.src(['node_modules/bootstrap/dist/**'])
    .pipe(gulp.dest('vendor/'));
});


// ///////////////////////////////////////
// Watching Recommended Task For change
// ///////////////////////////////////////
gulp.task('watch',function(){
    gulp.watch(['js/*.js','!js/*.min..js'],['scripts']);
    gulp.watch('scss/*.scss',['compass']);
    gulp.watch('**/*.html',['html']);
});

// ///////////////////////////////////////
// Setting up Default Tasks. 
// ///////////////////////////////////////

gulp.task('default', ['scripts','compass','browser-sync','watch']);
