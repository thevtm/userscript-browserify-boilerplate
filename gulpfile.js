'use strict';

let fs = require('fs');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let browserify = require('browserify');
let gulp = require('gulp');
let gutil = require('gulp-util');
var environments = require('gulp-environments');
let header = require('gulp-header');
let uglify = require('gulp-uglify');


/**** CONFIG ****/
const OUT_FILE_NAME = 'Boilerplate';
const DEST_PATH     = './build/';
const JS_PATH       = './src/**/*.js';
const HEADER_PATH   = './src/header.js';
const JS_ENTRIES    = ['./src/index.js'];


// gulp-environments
var development = environments.development;
var production = environments.production;


/***************/
/**** Tasks ****/
/***************/

gulp.task('build', () => {
  let b = browserify({
    entries: JS_ENTRIES,
    debug: development()
  });

  let outFileName = production() ? OUT_FILE_NAME + '.user.js' : OUT_FILE_NAME + '.dev.js';

  return b.bundle()
    .pipe(source(outFileName))
    .pipe(buffer())
    .pipe(production(uglify())) // uglify only in production.
    .pipe(header(fs.readFileSync(HEADER_PATH, 'utf8') + "\n")) // Add header to UserScript.
    .pipe(gulp.dest(DEST_PATH));
});

gulp.task('default', ['build']);

gulp.task('watch', ['default'], () => {
  gulp.watch(JS_PATH, ['build']);
});
