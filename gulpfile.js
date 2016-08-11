const gulp = require('gulp');
const obt = require('origami-build-tools');
const nodemon = require('nodemon');
const exec = require('child_process').exec;

gulp.task('build', function() {
  return obt.build(gulp, {
    js: './main.js',
    sass: './main.scss',
    buildJs: 'bundle.js',
    buildCss: 'bundle.css',
    buildFolder: 'public',
    scssLintPath: './.scss-lint.yml',
    esLintPath: './.eslintrc'
  });
});

gulp.task('install', function() {
  return obt.install();
});

gulp.task('verify', ['global-config'], function() {
  return obt.verify(gulp, {
    scssLintPath: './.scss-lint.yml',
    esLintPath: './.eslintrc'
  });
});

gulp.task('test', function() {
  return obt.test.npmTest(gulp);
});

gulp.task('serve', function(){
  nodemon({
    'script': 'server.js',
    'ignore': ["public", "src", "style"]
  });
});

gulp.task('global-config', function() {
  exec('node generate-config.js');
});

gulp.task('watch', function() {
  gulp.watch('./style/**/*', ['build']);
  gulp.watch('./src/**/*', ['build']);
});

gulp.task('default', ['verify', 'build']);
gulp.task('dev', ['default', 'serve', 'watch']);
