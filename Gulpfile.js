// Require plugins
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util');

// Config object that holds general info
var config = {
    src: 'assets/',
    dest: 'dist/',
    sassPattern: 'scss/**/*.+(sass|scss)',
    jsPattern: 'js/**/*.js',
    jadePattern: 'jade/**/*.jade',
    imgPattern: 'images/**/*',
    production: !!util.env.production // This refers to the flag '--production'. Those two exclamations turn undefined into a proper false.
};

// Tasks
gulp.task('html', function(){
    gulp.src(config.src + 'jade/**/!(_)*.jade') // All jade files that don't begin with underscore
    .pipe(plumber())
    .pipe(jade({
        pretty: config.production ? false : true
    }))
    .pipe(gulp.dest(""));
});

gulp.task('css', function(){
    gulp.src(config.src + config.sassPattern)
    .pipe(plumber())
    .pipe(sass({
        outputStyle: (config.production ? 'compressed' : 'nested')
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(autoprefixer({
        browsers: ['last 5 versions']
    }))
    .pipe(gulp.dest(config.dest + 'css'));
});

gulp.task('js', function(){
    // The order of the scripts below is IMPORTANT!
    return gulp.src([
        config.src + 'js/code-animation.js',
        config.src + 'js/reddit-feed.js',
        config.src + 'js/main.js',
    ])
    .pipe(plumber())
    .pipe(concat('app.min.js'))
    .pipe(config.production ? uglify() : util.noop())
    .pipe(gulp.dest(config.dest + 'js'));
});

// We could include an image-minification process later, for now it's just copying files
gulp.task('img', function(){
    gulp.src(config.src + config.imgPattern)
    .pipe(gulp.dest(config.dest + 'images'));
});

// Watch task
gulp.task('watch', function(){
    gulp.watch(config.src + config.jadePattern, ['html']);
    gulp.watch(config.src + config.sassPattern, ['css']);
    gulp.watch(config.src + config.jsPattern, ['js']);
});

// Default task
gulp.task('default', ['html', 'css', 'js', 'img', 'watch']);
