(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .service('AuthenticationService', AuthenticationService);

    /* @ngInject */
    function AuthenticationService(HttpService, ConfigurationService) {
        const authenticationURI = ConfigurationService.authenticationURI;
        const logoutURI = ConfigurationService.logoutURI;

        this.doAuthentication = (authObj) => HttpService.post(authenticationURI, authObj);
        this.doLogout = () => HttpService.get(logoutURI, { sessionId: this.getToken() });
        this.saveToken = (token) => ConfigurationService.saveToken(token);
        this.getToken = () => ConfigurationService.getToken();
    }
})();
