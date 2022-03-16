'use strict';

var preprocessor = 'scss';

// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');

const uglify = require('gulp-uglify-es').default;

const sass = require('gulp-sass');

const autoprefixer = require('gulp-autoprefixer');

const cleancss = require('gulp-clean-css');

const rigger = require('gulp-rigger');

const sourcemaps = require('gulp-sourcemaps');

const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');

const paths = {
    scripts: {
        src: 'app/**/*.html',
        dest: './'
    }
};

function includeHTML(){
    return gulp.src([
        'app/**/*.html',
        '!app/**/_*.html' // ignore
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}

function styles() {
    return src('app/' + preprocessor + '/*.scss') // Выбираем источник
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'] })) // Создадим префиксы с помощью Autoprefixer
        .pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минифицируем стили
        .pipe(sourcemaps.write())
        .pipe(dest('css/')) // Выгрузим результат в папку "app/css/"
}

function buildcopy() {
    return src([ // Выбираем нужные файлы
        'css/**/*.css',
        'app/**/*.html',
    ], { base: 'app' }) // Параметр "base" сохраняет структуру проекта при копировании
        .pipe(dest('dist')) // Выгружаем в папку с финальной сборкой
}

function startwatch() {

    // Мониторим файлы препроцессора на изменения
    watch('app/**/' + preprocessor + '/**/*', styles);

    // Мониторим файлы HTML на изменения
    watch(['app/**/*.html','app/*.html'],includeHTML);
}

// Экспортируем функцию styles() в таск styles
exports.styles = styles;
exports.includeHTML = includeHTML;

// Создаем новый таск "build", который последовательно выполняет нужные операции
exports.build = series( styles, includeHTML, buildcopy, startwatch);

// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(styles, includeHTML, startwatch);