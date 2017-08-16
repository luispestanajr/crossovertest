(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .component('crossVideoList', {
            templateUrl: 'components/videoList/videoList.template.html',
            controller: 'VideoListComponentController',
            controllerAs: '$ctrl'
        });
})();
