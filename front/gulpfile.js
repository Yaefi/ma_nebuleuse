const gulp = require('gulp');
const webpack = require('webpack-stream');
const watch = require('gulp-watch');

gulp.task('stream', function () {
    // Endless stream mode
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
});

function watchFiles() {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('src/**/*.js', ['build']);
}

function buildClient() {
  return gulp.src('src/index.js')
    .pipe(webpack({
      output: {
        filename: 'app.js',
      },
    }))
    .pipe(gulp.dest('../public'));
}

gulp.task('build', buildClient)

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], buildClient);
  // gulp.watch(watchedFiles, extractMarkdown);
})

gulp.task('default', ['build', 'watch']);
