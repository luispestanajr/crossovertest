(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .service('AuthenticationService', AuthenticationService);

    /* @ngInject */
    function AuthenticationService(HttpService, ConfigurationService) {
        const authenticationURI = ConfigurationService.authenticationURI;

        this.doAuthentication = (authObj) => HttpService.post(authenticationURI, authObj);
        this.saveToken = (token) => ConfigurationService.saveToken(token);
        this.getToken = () => ConfigurationService.getToken();
    }
})();
