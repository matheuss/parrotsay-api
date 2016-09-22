import gulp from 'gulp'
import babel from 'gulp-babel'
import cache from 'gulp-cached'

gulp.task('transpile', () =>
  gulp.src('src/*.js')
    .pipe(cache('transpile'))
    .pipe(babel())
    .pipe(gulp.dest('dist')))

gulp.task('move-the-parrots', () =>
  gulp.src('src/parrots/*.txt')
    .pipe(gulp.dest('dist')))

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['transpile'])
  gulp.watch('src/parrots/*.txt', ['move-the-parrots'])
})

gulp.task('default', ['watch', 'transpile', 'move-the-parrots'])
