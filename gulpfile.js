var gulp = require('gulp'),
    awspublish = require('gulp-awspublish'),
    cloudfront = require('gulp-cloudfront-invalidate-aws-publish')
    aws = require('aws-sdk'),
    bower = require('gulp-bower'),
    parallelize = require("concurrent-transform"),
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

gulp.task('publish', function() {
    bower();

    var awsCredentials =  new aws.SharedIniFileCredentials({
        profile: 'bluefrog'
    });

    var publisher = awspublish.create({
        region: 'us-east-1',
        credentials: awsCredentials,
        params: {
            Bucket: 'bluefrog-ca-website'
        }
    });

    return gulp.src(['**', '!node_modules/**'])
        .pipe(parallelize(publisher.publish(), 10))
        .pipe(cloudfront({
            distribution: 'E2107SD7GS1DUD',
            indexRootPath: true,
            credentials: awsCredentials
        }))
        .pipe(publisher.sync())
        .pipe(publisher.cache())
        .pipe(awspublish.reporter());
});

gulp.task('default', ['bower', 'build-css', 'publish']);