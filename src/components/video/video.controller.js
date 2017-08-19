(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('VideoComponentController', VideoComponentController);

    function VideoComponentController($state, AuthenticationService, $window) {
        var $ctrl = this;

        $ctrl.playVideo = () => {
            $ctrl.isVideoPlaying = true;
            $ctrl.playingVideo = $ctrl.video;
            $ctrl.hadRated = false;
            $window.scrollTo(0, 0);
        };
    }
})();
