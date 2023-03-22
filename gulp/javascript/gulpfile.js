const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify  = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false,
        presets: ['env'],
    }))
    .pipe(uglify())
    .on('error', err => console.log(err))
    .pipe(concat('app.min.js'))
    .app(gulp.dest('build'))
    return callback()
}

module.exports.default = series(transformacaoJS);
 