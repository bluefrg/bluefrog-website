var gulp = require('gulp'),
    bower = require('gulp-bower'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');


gulp.task('build-css', function () {
    return gulp.src('css/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(concat('combined.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('bower', function () {
    return bower();
});

gulp.task('watch', function () {
    gulp.watch('css/*.less', ['build-css']);
});

gulp.task('default', ['bower', 'build-css']);