(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .service('ConfigurationService', ConfigurationService);

    /* @ngInject */
    function ConfigurationService($http, configuration) {
        let { baseUrl } = configuration;
        this.authenticationURI = `${baseUrl}/user/auth`;
        this.logoutURI = `${baseUrl}/user/logout`;
        this.videosURI = `${baseUrl}/videos`;
        this.videoURI = `${baseUrl}/video`;
        this.rateVideoURI = `${baseUrl}/video/rating`;
        this.sessionID = undefined;

        this.saveToken = sessionID => this.sessionID = sessionID;
        this.getToken = () => this.sessionID;
        this.clearToken = () => this.sessionID = undefined;
    }
})();
