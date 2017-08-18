(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('VideoListComponentController', VideoListComponentController);

    function VideoListComponentController($state, AuthenticationService, VideoService) {
        var $ctrl = this;
        $ctrl.videos = [];

        $ctrl.$onInit = () => {
            let params = {
                sessionId: AuthenticationService.getToken(),
                skip: 1,
                limit: 10
            };

            VideoService.getVideos(params)
                .then((res) => {
                    $ctrl.videos = res.data;
                });

        };
    }
})();
