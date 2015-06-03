var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var sass = require('gulp-sass');


var paths = {
    html:'src/*.html',
    sass:'src/style/style.scss',
    css:'src/style/style.css',
    scripts: 'src/app/**/*.js',
    images: ''
};
gulp.task('minify-js', function () {
    return gulp.src(paths.scripts)
        .pipe(babel({modules: "amd"}))
        .pipe(uglify())
        //.pipe(concat('main.js'))
        .pipe(gulp.dest("./build/app/"));

});

gulp.task('minify-html', function () {
    return gulp.src(paths.html)
        .pipe(minifyHTML())
        .pipe(gulp.dest("./build/"));
});

gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/style/'));
});



gulp.task('minify-css', function () {
    return gulp.src(paths.css)
        .pipe(minifyCSS({keepBreaks: true}))
        .pipe(gulp.dest("./build/style/"));
});

gulp.task('default', ['minify-js', 'minify-html','sass', 'minify-css']);

var watcher = gulp.watch('./src/**/*.*', ['default']);
watcher.on('change', function (e) {
    console.log('File ' + e.path + ' was ' + e.type + '!');
});

