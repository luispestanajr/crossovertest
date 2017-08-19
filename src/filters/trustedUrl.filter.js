(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .filter('trustUrl', trustUrlFilter);

    function trustUrlFilter($sce) {
        return function(recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }
})();
