(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .config(AppRouter);

    /* @ngInject */
    function AppRouter($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
}());
