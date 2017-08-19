(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .component('crossVideo', {
            templateUrl: 'components/video/video.template.html',
            bindings: {
                video: '=',
                isVideoPlaying: '=',
                playingVideo: '=',
                hadRated: '='
            },
            controller: 'VideoComponentController',
            controllerAs: '$ctrl'
        });
})();
