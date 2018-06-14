var gulp = require('gulp');
var jshint = require('gulp-jshint');


// Looks for js files from project root and 'src' folder
var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint());
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    // Files locations
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']);

    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './bower_components',
        // Shortens the path in index.html file
        ignorePath: '../../bower_components'
    };

    // Adds html files location for gulp
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});