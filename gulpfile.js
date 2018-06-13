var gulp = require('gulp');
var jshint = require('gulp-jshint');


// Looks for files from project root and 'src' folder
var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint());
});