var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var original = './dist/active-scroll.js',
    output = './dist/';

gulp.task('compress', function() {
    return gulp.src(original)
        .pipe(rename('active-scroll.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest( output ));
});

gulp.task('default', ['compress']);