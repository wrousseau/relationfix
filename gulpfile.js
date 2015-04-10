var gulp = require('gulp');
var karma = require('gulp-karma');
var rename = require('gulp-rename');
var loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('default', function() {
  gulp.src(testFiles)
  .pipe(karma({
    configFile: 'karma.conf.js',
    action: 'watch'
  }));

  return gulp.src('./server/server.js')
  .pipe(loopbackAngular())
  .pipe(rename('lb-services.js'))
  .pipe(gulp.dest('./client/js/services'));
});

var testFiles = [
  'client/lib/angular/angular.js',
  'client/lib/angular-resource/angular-resource.js',
  'client/lib/angular-animate/angular-animate.js',
  'client/lib/angular-aria/angular-aria.js',
  'client/lib/angular-material/angular-material.js',
  'client/lib/angular-mocks/angular-mocks.js',
  'client/lib/angular-ui-router/release/angular-ui-router.js',
  'client/js/app.js',
  'client/js/**/*.js',
  'test/**/*.js'
];

gulp.task('karma', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
