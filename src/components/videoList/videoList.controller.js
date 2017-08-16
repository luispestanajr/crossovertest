(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('VideoListComponentController', VideoListComponentController);

    function VideoListComponentController($state, AuthenticationService) {
        var $ctrl = this;
    }
})();
