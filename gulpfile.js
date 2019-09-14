const gulp = require('gulp'),
      sass = require('gulp-sass'),
      watch = require('gulp-watch'),

      webpack = require('webpack'),
      browserSync = require('browser-sync').create();


gulp.task('sassMe', function(){
  gulp.src('./src/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/css'))
});


gulp.task('uglyJS', function(callback){
  webpack(require('./webpack.config.js'), function(err, stats){
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});

gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: './public/'
    }
  });

  watch('./public/index.html', function(){
    browserSync.reload();
  });

  watch('./src/js/*.js', function(){
    gulp.start('scriptRefresh');
  });

  watch('./src/sass/*.scss', function(){
    gulp.start('cssInject');
  });


});

gulp.task('cssInject',['sassMe'], function(){
  return gulp.src('./public/css/styles.css')
             .pipe(browserSync.stream());
});

gulp.task('scriptRefresh',['uglyJS'], function() {
  browserSync.reload();
});
