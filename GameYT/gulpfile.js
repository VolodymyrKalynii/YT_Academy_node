const gulp = require('gulp');
const scss = require('gulp-sass');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const del = require('del');
const concat = require('gulp-concat');
const autoPrefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
        .pipe(scss().on('error', error => console.log(error)))
        .pipe(
            autoPrefixer(
                ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
                { cascade: true }
            )
        )
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }))
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('scripts', ['scripts-babelify'], () => {
    return  gulp.src('tmp/js/**/*.js')
        .pipe(concat('index.js'))
        .pipe(browserify({
            insertGlobals: true
        }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scripts-babelify', () => {
    return gulp.src('app/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('tmp/js'));
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('browser-sync', function() {
    browserSync({
        server: { baseDir: 'dist' },
        notify: false,
        open: false
    });
});

gulp.task('watch', ['sass', 'scripts'], function () {
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/index.html');
    gulp.watch('app/js/**/*.js', ['scripts']);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('build', ['clean'], function () {
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('start', ['build', 'browser-sync', 'watch']);

gulp.task('default', ['start']);