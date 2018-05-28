const gulp = require('gulp');
const sass = require('gulp-sass');
const strip = require('gulp-strip-comments');

gulp.task('default', ['html', 'css']);

gulp.task('html', () => {
  gulp.src('index.html')
  .pipe(strip())
  .pipe(gulp.dest('docs/'));
});

gulp.task('css', () => {
  gulp.src('style.scss')
  .pipe(strip.text())
  .pipe(sass())
  .pipe(gulp.dest('docs/'));
});

gulp.task('watch', ['default'], () => {
  gulp.watch('index.html', ['html']);
  gulp.watch('style.scss', ['css']);
});
