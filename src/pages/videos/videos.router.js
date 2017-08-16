(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .config(VideosRouter);

    /* @ngInject */
    function VideosRouter($stateProvider) {
        $stateProvider
            .state('videos', {
                url: '/videos',
                views: {
                    'conteudo': {
                        controller: 'VideosPageController as $ctrl',
                        templateUrl: '/pages/videos/videos.template.html'
                    }
                }
            });
    };
}());
