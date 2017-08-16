(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .service('VideoService', VideoService);

    /* @ngInject */
    function VideoService(HttpService, ConfigurationService) {
        this.videosURI = ConfigurationService.videosURI;
        this.videoURI = ConfigurationService.videoURI;
        this.rateVideoURI = ConfigurationService.rateVideoURI;

        this.getVideos = ({ sessionId, skip, limit }) => HttpService.get(this.videosURI, {sessionId, skip, limit});
        this.getVideo = ({ sessionId, videoId }) => HttpService.get(this.videoURI, { sessionId, videoId });
        this.rateVideo = ({ videoId, rating }) => HttpService.post(this.rateVideoURI, { videoId, rating });
    }
})();
