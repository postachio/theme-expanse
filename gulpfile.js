// requirements
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    path = require('path');
    
// run
gulp.task('default', function() {
  
  // easier to read variable
  var themeName = 'expanse';
  
  // less
  gulp.src('./assets/less/' + themeName + '.less')
    .pipe(less({ paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./assets/css/'));

  // uglify
  gulp.src('./assets/js/' + themeName + '.js')
    .pipe(uglify())
    .pipe(rename(themeName + '.min.js'))          
    .pipe(gulp.dest('./assets/js/'));
  
});