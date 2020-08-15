const { src, dest, watch } = require('gulp');
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

// exports.build = parallel(css, js);
exports.default = function () {
  watch('src/sass', css);
  watch('src/js', js);
};
