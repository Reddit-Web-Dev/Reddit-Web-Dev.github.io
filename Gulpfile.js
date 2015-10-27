var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

// Compile sass styles into scss
// TODO: Should also minify the css file
gulp.task('sass', function() {
  gulp.src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist/css'));
});

// Watch for changes scss files
gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass']);
});

// TODO: Concat/Minify JS files
// TODO: Jade

gulp.task('default', ['sass', 'watch']);