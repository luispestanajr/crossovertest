(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .service('AuthenticationService', AuthenticationService);

    /* @ngInject */
    function AuthenticationService(HttpService, ConfigurationService, $cookies) {
        const authenticationURI = ConfigurationService.authenticationURI;
        const logoutURI = ConfigurationService.logoutURI;

        this.doAuthentication = (authObj) => HttpService.post(authenticationURI, authObj);
        this.doLogout = () => HttpService.get(logoutURI, { sessionId: this.getToken() });
        this.saveToken = (token) => $cookies.put('sessionId', token);//ConfigurationService.saveToken(token);
        this.getToken = () => $cookies.get('sessionId');
    }
})();
