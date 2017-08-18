(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .component('crossVideo', {
            templateUrl: 'components/video/video.template.html',
            bindings: {
                video: '='
            },
            controller: 'VideoComponentController',
            controllerAs: '$ctrl'
        });
})();
