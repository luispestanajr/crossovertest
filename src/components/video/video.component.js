(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .component('crossVideo', {
            templateUrl: 'components/video/video.template.html',
            controller: 'VideoComponentController',
            controllerAs: '$ctrl'
        });
})();
