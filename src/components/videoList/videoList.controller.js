(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('VideoListComponentController', VideoListComponentController);

    function VideoListComponentController($state, AuthenticationService, VideoService) {
        var $ctrl = this;
        $ctrl.videos = [];
        $ctrl.loadingMoreVideos = true;
        $ctrl.skipVideo = 1;

        $ctrl.$onInit = () => {
            if(!AuthenticationService.getToken()) {
                $state.go('main');
                return;
            }

            $ctrl.loadVideos();
        };

        $ctrl.loadVideos = () => {
            let params = {
                sessionId: AuthenticationService.getToken(),
                skip: $ctrl.skipVideo,
                limit: 10
            };

            VideoService.getVideos(params)
                .then((res) => {
                    res.data.map((video) => $ctrl.videos.push(video));
                })
                .catch(() => {
                    toastr.error('Something went wrong when loading videos.');
                })
                .finally(() => {
                    $ctrl.loadingMoreVideos = false;
                });
        };

        $ctrl.pagings = () => {
            if($ctrl.loadingMoreVideos || $ctrl.videos.length > 90) {
                return;
            }

            $ctrl.loadingMoreVideos = true;

            $ctrl.skipVideo += 10;
            $ctrl.loadVideos();
        };

        $ctrl.onRating = (rating) => {
            let params = {
                sessionId: AuthenticationService.getToken(),
                videoId: $ctrl.playingVideo._id,
                rating
            };

            VideoService.rateVideo(params)
                .then((res) => {
                    $ctrl.playingVideo.ratings.push(rating);

                    var videoUpdate = $ctrl.videos.filter((video) => video._id === $ctrl.playingVideo._id);

                    videoUpdate.ratings = [...$ctrl.playingVideo.ratings];

                    $ctrl.hadRated = true;
                })
                .catch(() => {
                    toastr.error('Something went wrong when rating this video.');
                });
        };
    }
})();
