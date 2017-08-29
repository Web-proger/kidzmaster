const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');
const preproc = require('gulp-sass');

const config = {
    src: './src',
    css: {
        watch: '/precss/**/*.scss',
        src: '/precss/styles.scss',
        dest: '/css'
    },
    html: {
        src: '/index.html'
    }
};

gulp.task('build', function () {
    gulp.src(config.src + config.css.src)
            .pipe(preproc().on('error', preproc.logError)) // Не прекращает работу при ошибке
            .pipe(gcmq())
            .pipe(autoprefixer({
                browsers: ['> 0.5%'],
                cascade: false
            }))
            .pipe(cleanCSS({
                level: 2
            }))
            .pipe(gulp.dest(config.src + config.css.dest))
            .pipe(browserSync.reload({
                stream: true
            }));
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.src + config.css.watch, ['build']);
    gulp.watch(config.src + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});
