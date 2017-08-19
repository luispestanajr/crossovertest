'use strict';

const gulp = require('gulp'),
    runSequence = require('run-sequence');

// Task to build dev environment
gulp.task('build:dev', (done) => {
    global.isProd = false;
    runSequence(
        'clean',
        'lint',
        'styles',
        'styles:vendors',
        'scripts',
        'scripts:vendors',
        ['fonts', 'images', 'videos', 'html', 'modal'],
        done
    );
});

// Task to build production environment
gulp.task('build:prod', (done) => {
    global.isProd = true;
    runSequence(
        'clean',
        'lint',
        'styles',
        'styles:vendors',
        'scripts',
        'scripts:vendors',
        ['fonts', 'images', 'videos', 'html', 'modal'],
        'test:build',
        done
    );
});
