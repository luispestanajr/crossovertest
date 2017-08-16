(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .component('crossHeader', {
            templateUrl: 'components/header/header.template.html',
            controller: 'HeaderComponentController',
            controllerAs: '$ctrl'
        });
})();
