(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('VideoComponentController', VideoComponentController);

    function VideoComponentController($state, AuthenticationService) {
        var $ctrl = this;
        $ctrl.rating = 0;

        $ctrl.$onInit = () => {
            $ctrl.rating = Math.floor($ctrl.video.ratings.reduce((prev, curr) => prev + curr) / $ctrl.video.ratings.length);
        };
    }
})();
