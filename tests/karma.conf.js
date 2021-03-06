module.exports = (config) => {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        // as well as any additional frameworks (requirejs/chai/sinon/...)
        frameworks: [
            'jasmine'
        ],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'src/assets/js/jquery.autocomplete.min.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-carousel/dist/angular-carousel.js',
            'node_modules/angular-cookies/angular-cookies.js',
            'node_modules/angular-format-masks/dist/format-masks.component.js',
            'node_modules/angular-i18n/angular-locale_pt-br.js',
            'node_modules/angular-input-masks/releases/angular-input-masks-standalone.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/angular-spinner/dist/angular-spinner.js',
            'node_modules/angular-touch/angular-touch.js',
            'node_modules/@uirouter/core/_bundles/ui-router-core.js',
            'node_modules/@uirouter/angularjs/release/ui-router-angularjs.js',
            'node_modules/angulartics/dist/angulartics.min.js',
            'node_modules/angulartics-google-tag-manager/dist/angulartics-google-tag-manager.min.js',
            'node_modules/ngstorage/ngStorage.js',
            'node_modules/spin.js/spin.js',
            'node_modules/@celulardireto/error-message/dist/error-message.component.js',
            'node_modules/@celulardireto/cd-directives/dist/cd.directives.js',
            'node_modules/angular-input-masks/releases/angular-input-masks-standalone.min.js',
            'node_modules/toastr/build/toastr.min.js',
            'node_modules/moment/min/moment.min.js',
            'node_modules/phantomjs-polyfill-array-from/array-from-polyfill.js',
            'node_modules/materialize-css/dist/js/materialize.min.js',
            'node_modules/angular-md5/angular-md5.min.js',
            'node_modules/angular-jk-rating-stars/dist/jk-rating-stars.min.js',
            'node_modules/toastr/build/toastr.min.js',
            'node_modules/ng-infinite-scroll/build/ng-infinite-scroll.min.js',
            'src/app/app.module.js',
            'src/app/app.module.spec.js',
            'src/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [
            'src/app/app.run.js'
        ],

        // web server port
        port: 8081,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],

        // Which plugins to enable
        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-coverage',
            'karma-jasmine',
            'karma-threshold-reporter',
            'karma-babel-preprocessor',
            'karma-junit-reporter',
        ],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
            'src/!(assets)/**/*.js': ['babel', 'coverage'],
            'src/**/*.spec.js': ['babel'],
        },

        // the configure thresholds
        thresholdReporter: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'threshold', 'coverage', 'junit'],
        coverageReporter: {
            dir : 'tests/',
            reporters: [
                { type: 'html', subdir: 'coverage/' },
                { type: 'cobertura', subdir: '../coverage/', file: 'cobertura-coverage.xml' }
            ]
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        junitReporter: {
            outputDir: '',
            outputFile: 'tests.xml',
            suite: '',
            useBrowserName: false,
            nameFormatter: undefined,
            classNameFormatter: undefined,
            properties: {},
            xmlVersion: null
        }
    });
};
