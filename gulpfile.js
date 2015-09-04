var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('js', function () {
  gulp.src([ 'app/**/constants/*js','app/**/app.js', 'app/**/*.js'])
    .pipe(concat('dist/app.js'))
    .pipe(gulp.dest('.'))
})