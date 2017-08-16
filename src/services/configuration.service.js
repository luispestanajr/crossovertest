(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .service('ConfigurationService', ConfigurationService);

    /* @ngInject */
    function ConfigurationService($http, configuration) {
        this.authenticationURI = configuration.baseUrl + '/user/auth';
        this.sessionID;

        this.saveToken = sessionID => this.sessionID = sessionID;
        this.getToken = () => this.sessionID;
    }
})();
