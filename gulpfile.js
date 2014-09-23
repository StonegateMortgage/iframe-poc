(function() {
  var gulp = require('gulp'),
    open = require('gulp-open'),
    connect = require('connect'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    serveStatic = require('serve-static');

  gulp.task('serve', function(next) {
    var server = connect();
    server.use(serveStatic('public', {
      'index': ['index.html']
    }))

    livereload.listen();
    gulp.watch('public/**').on('change', function() {
      livereload.changed();
    });

    server.listen(9100, next);
    gulp.src('./public/index.html')
      .pipe(open("", {
        url: "http://localhost:9100/"
      }));
  });
})();
