(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .config(AppConfig);

    /* @ngInject */
    function AppConfig($locationProvider, usSpinnerConfigProvider, configurationProvider) {
        $locationProvider.html5Mode(true);
    }
}());
