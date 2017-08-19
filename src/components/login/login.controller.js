(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('LoginComponentController', LoginComponentController);

    function LoginComponentController($state, AuthenticationService, md5) {
        var $ctrl = this;

        $ctrl.$onInit = () => {
            toastr.options = {
                'positionClass': 'toast-bottom-full-width',
                'progressBar': true,
            };
        };

        $ctrl.doLogin = (loginForm) => {
            if (loginForm.$valid === false) {
                return false;
            }

            let { username, password } = $ctrl.loginForm;

            let authObj = {
                username: username,
                password: md5.createHash(password)
            };

            AuthenticationService.doAuthentication(authObj)
                .then((res) => {
                    if(angular.isDefined(res.error)) {
                        $ctrl.errorMessage = res.error;
                        return false;
                    }

                    $ctrl.errorMessage = null;
                    AuthenticationService.saveToken(res.sessionId);
                    $state.go('videos', {slideDir:'slide-right'});
                })
                .catch((ex) => {
                    $ctrl.errorMessage = ex.data.error;
                });
        };
    }
})();
