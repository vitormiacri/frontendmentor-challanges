const { src, dest, watch, series } = require('gulp');
const minify = require('gulp-minify');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function css() {
  return src('src/sass/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(dest('./dist/css'));
}

function js() {
  return src('src/js/*.js')
    .pipe(minify({ noSource: true }))
    .pipe(dest('./dist/js'));
}

function html() {
  return src('src/*html').pipe(dest('./dist'));
}

function images() {
  return src('src/images/**.*').pipe(dest('./dist/images'));
}

function watchFiles() {
  watch('src/*.html', html);
  watch('src/sass', css);
  watch('src/js', js);
}

exports.default = series(html, css, js, images, watchFiles);
