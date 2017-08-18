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
    }
})();
