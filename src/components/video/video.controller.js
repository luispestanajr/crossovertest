(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('VideoComponentController', VideoComponentController);

    function VideoComponentController($state, AuthenticationService) {
        var $ctrl = this;
    }
})();
