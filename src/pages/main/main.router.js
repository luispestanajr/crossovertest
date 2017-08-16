(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .config(LoginRouter);

    /* @ngInject */
    function LoginRouter($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    'conteudo': {
                        controller: 'MainPageController as $ctrl',
                        templateUrl: '/pages/main/main.template.html'
                    }
                }
            });
    };
}());
