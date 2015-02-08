var gulp = require('gulp');

gulp.task('watch-styles', function() {
    gulp.watch('src/sass/**/*.scss', ['styles']);
});