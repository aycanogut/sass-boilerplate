// initialize modules 
const {
  src,
  dest,
  watch,
  series
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// @use of dart-sass
sass.compiler = require('dart-sass');

// sass tasks
const scssTask = () => {
  return src('src/styles/index.scss', {
      sourcemaps: true
    })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', {
      sourcemaps: '.'
    }));
};

// js tasks
const jsTask = () => {
  return src('src/js/script.js', {
      sourcemaps: true
    })
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(terser())
    .pipe(dest('dist', {
      sourcemaps: '.'
    }));
};

// browsersync functionality
const browserSyncServe = (cb) => {
  browsersync.init({
    server: {
      baseDir: '.',
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
  cb();
};

const browserSyncReload = (cb) => {
  browsersync.reload();
  cb();
};

// watch task
const watchTask = () => {
  watch('*.html', browserSyncReload);
  watch(
    ['src/styles/**/*.scss', 'src/**/*.js'],
    series(scssTask, jsTask, browserSyncReload)
  );
};

// default gulp task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);