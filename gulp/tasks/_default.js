gulp = require('gulp');
runSequence = require('run-sequence');

// DEFAULT TASK
// ************
//
// { CLEANS output folders } then { COMPILES scripts and styles } and { WATCHES scripts and styles for changes }
//
//                                    TASKS
//
// clean output folders             : clean
// javascript compile + watch       : webpack
// styles compile                   : styles
// styles watch                     : watch-styles

gulp.task('default', ['clean'], function() {
    runSequence( ['webpack', 'styles', 'watch-styles'] );
});