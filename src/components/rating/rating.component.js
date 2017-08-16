(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .component('crossVideoRating', {
            templateUrl: 'components/rating/rating.template.html',
            controller: 'RatingComponentController',
            controllerAs: '$ctrl'
        });
})();
