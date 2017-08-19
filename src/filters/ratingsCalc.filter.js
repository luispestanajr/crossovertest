(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .filter('ratingsCalc', ratingsCalcFilter);

    function ratingsCalcFilter() {
        return function(ratings) {
            return Math.floor(ratings.reduce((prev, curr) => prev + curr) / ratings.length);
        };
    }
})();
