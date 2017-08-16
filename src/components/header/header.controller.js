(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('HeaderComponentController', HeaderComponentController);

    function HeaderComponentController($state, AuthenticationService) {
        var $ctrl = this;
        $ctrl.logOut = () => {
            AuthenticationService.doLogout()
                .then(() => {
                    $state.go('main');
                });
        };
    }
})();
