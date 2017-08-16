'use strict';

const gulp = require('gulp'),
    config = require('./config'),
    gulpif = require('gulp-if'),
    del = require('del'),
    htmlmin = require('gulp-htmlmin'),
    CacheBuster = require('gulp-cachebust'),
    cachebust = new CacheBuster(),
    runSequence = require('run-sequence');

// Task to delete old files that was generated
gulp.task('delete-unchachebust-files', () => {
    if(global.isProd)
    {
        return del([(global.isProd ? config.paths.dist.js : config.paths.tmp.js) + 'scripts.js',
            (global.isProd ? config.paths.dist.js : config.paths.tmp.js) + 'vendors.js',
            (global.isProd ? config.paths.dist.js : config.paths.tmp.js) + 'scripts.js.map',
            (global.isProd ? config.paths.dist.css : config.paths.tmp.css) + 'styles.css',
            (global.isProd ? config.paths.dist.css : config.paths.tmp.css) + 'vendors.css']);  
    }

    return;
});

// Task to prevent cache of production Script files
gulp.task('cachebust-scripts', () =>  {
    return gulp.src([(global.isProd ? config.paths.dist.js : config.paths.tmp.js) + '*.js', (global.isProd ? config.paths.dist.js : config.paths.tmp.js) + '*.map'])
                .pipe(gulpif(global.isProd, cachebust.resources()))
                .pipe(gulp.dest(global.isProd ? config.paths.dist.js : config.paths.tmp.js));
});

// Task to prevent cache of production Style files
gulp.task('cachebust-styles', () =>  {
    return gulp.src((global.isProd ? config.paths.dist.css : config.paths.tmp.css) + '*.css')
                .pipe(gulpif(global.isProd, cachebust.resources()))
                .pipe(gulp.dest(global.isProd ? config.paths.dist.css : config.paths.tmp.css));
});

gulp.task('html-task', () => {
    return gulp.src([config.paths.src.allHtmls, '!**/.index.html'])
               .pipe(gulpif(global.isProd, cachebust.references()))
               .pipe(gulpif(global.isProd, htmlmin({collapseWhitespace: true, minifyCSS: true})))
               .pipe(global.isProd ? gulp.dest(config.root.dist) : gulp.dest(config.root.tmp));
});

// Task To move and minify html files
gulp.task('html', (done) => {
    runSequence(
        'cachebust-scripts',
        'cachebust-styles',
        'html-task',
        'delete-unchachebust-files',
        done
    );
});
