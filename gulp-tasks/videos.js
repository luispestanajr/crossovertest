'use strict';

const gulp = require('gulp'),
    config = require('./config');

// Compress Images and move to dist folder
gulp.task('videos', () => {
    return gulp.src(config.paths.src.assets.videos)
               .pipe(global.isProd ? gulp.dest(config.paths.dist.videos) : gulp.dest(config.paths.tmp.videos));
});

