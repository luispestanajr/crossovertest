(function() {
    'use strict';

    const root = exports.root = {
        assets: 'src/assets',
        dist: 'dist',
        modal: 'src/interno/*',
        src: 'src',
        test: 'test',
        tmp: '.tmp'
    };

    exports.server = {
        browser: require('os').platform() === 'win32' ? 'chrome' : 'google chrome',
        mainHTML: root.src + '/index.html',
        port: 3000,
        uri: 'http://localhost:3000/'
    };

    exports.paths = {
        base: __dirname.replace(require('path').basename(__dirname), ''),
        dist: {
            css: root.dist + '/assets/css/',
            fonts: root.dist + '/assets/fonts/',
            images: root.dist + '/assets/imgs/',
            js: root.dist + '/assets/js/',
            modal: root.dist + '/interno/'
        },
        src: {
            assets: {
                allFonts: [
                    root.assets + '/fonts/**/*.woff',
                    root.assets + '/fonts/**/*.woff2',
                    root.assets + '/fonts/**/*.tff',
                    root.assets + '/fonts/**/*.ttf',
                    root.assets + '/fonts/**/*.eot',
                    root.assets + '/fonts/**/*.svg'
                ],
                allVendorsCss: [
                    './node_modules/materialize-css/dist/css/materialize.min.css',
                    './node_modules/toastr/build/toastr.min.css',
                ],
                allImages: root.assets + '/imgs/**/*',
                allSass: [
                    root.src + '/**/*.sass'
                ],
                styleSass: root.src + '/styles/styles.sass',
                css: root.assets + '/css',
                root: root.assets
            },
            allHtmls: root.src + '/**/*.html',
            allVendors: [
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/angular/angular.js',
                'node_modules/angular-animate/angular-animate.js',
                'node_modules/angular-carousel/dist/angular-carousel.js',
                'node_modules/angular-cookies/angular-cookies.js',
                'node_modules/angular-format-masks/dist/format-masks.component.js',
                'node_modules/angular-input-masks/releases/angular-input-masks-standalone.js',
                'node_modules/angular-mocks/angular-mocks.js',
                'node_modules/angular-sanitize/angular-sanitize.js',
                'node_modules/angular-spinner/dist/angular-spinner.js',
                'node_modules/angular-touch/angular-touch.js',
                'node_modules/@uirouter/core/_bundles/ui-router-core.js',
                'node_modules/@uirouter/angularjs/release/ui-router-angularjs.js',
                'node_modules/spin.js/spin.js',
                'node_modules/materialize-css/dist/js/materialize.min.js',
                'node_modules/angular-md5/angular-md5.min.js'
            ],
            allScripts: [
                'src/app/app.module.js',
                'src/**/*.js',
                '!src/**/*.spec.js'
            ]
        },
        test: {
            allTests: root.test + '/src/**/*.spec.js',
            coverage: root.test + '/coverage',
            karmaConf: root.test + '/karma.conf.js'
        },
        tmp: {
            css: root.tmp + '/assets/css/',
            fonts: root.tmp + '/assets/fonts/',
            images: root.tmp + '/assets/imgs/',
            js: root.tmp + '/assets/js/',
            modal: root.tmp + '/interno/',
        }
    };
}());
