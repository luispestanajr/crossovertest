(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('HeaderComponentController', HeaderComponentController);

    function HeaderComponentController($state, AuthenticationService, $cookies) {
        var $ctrl = this;
        $ctrl.doLogout = () => {
            AuthenticationService.doLogout()
                .then(() => {
                    $cookies.remove('sessionId');
                    $state.go('main');
                });
        };
    }
})();
