require('dotenv').config({silent: true});
const gulp = require('gulp');
const obt = require('origami-build-tools');
const nodemon = require('gulp-nodemon');
const exec = require('child_process').exec;
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');
const livereload = require('gulp-livereload');
let appServer;

const verifyFn = function () {
  return obt.verify(gulp, {
    esLintPath: './.eslintrc'
  });
};

gulp.task('build', ['global-config'], function () {
  return obt.build(gulp, {
    js: './src/index.js',
    sass: './style/main.scss',
    buildJs: 'bundle.js',
    buildCss: 'kmt-header.css',
    buildFolder: 'public',
    esLintPath: './.eslintrc',
    env: process.env.NODE_ENV
  });
});

gulp.task('build-page', function () {
  return obt.build(gulp, {
    sass: './style/page.scss',
    buildCss: 'page.css',
    buildFolder: 'public',
    env: process.env.NODE_ENV
  });
});

gulp.task('install', function () {
  return obt.install();
});

gulp.task('verify', verifyFn);
gulp.task('dev-verify', ['img', 'watch'], verifyFn);

gulp.task('test', function () {
  return obt.test.npmTest(gulp);
});

gulp.task('serve', ['dev-add-livereload', 'build', 'build-page'], function () {
  appServer = nodemon({
    'script': 'server.js',
    'verbose': true,
    'watch': false,
    'ignore': ['*.*']
  }).on('restart', function () {
    /* eslint no-console: ['error', { allow: ['warn', 'log'] }] */
    console.log('>>>>>>> nodemon app is restarting <<<<<<<<');
  });
});

gulp.task('restart-server', function () {
  appServer.restart();
});

gulp.task('refresh-page', ['build', 'build-page'], function () {
  livereload.changed('src/index.js');
});

gulp.task('global-config', function () {
  exec('node generate-config.js');
});

gulp.task('watch', ['serve'], function () {
  livereload.listen({port: process.env.LIVERELOAD_PORT});
  gulp.watch(['./style/**/*', './src/**/*'], ['refresh-page']);
  gulp.watch('./*.*', ['restart-server']);
});

gulp.task('img', function () {
  return gulp.src('./style/images/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: []
    }))
    .pipe(size({ showFiles: true, title: 'images compressed:' }))
    .pipe(gulp.dest('./public/images'));
});

gulp.task('dev-add-livereload', function () {
  process.env.DEV_ADD_LIVERELOAD = true;
});

gulp.task('default', ['build', 'build-page', 'img']);
gulp.task('dev', ['dev-verify']);
