(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .component('wzHeader', {
            templateUrl: 'components/header/header.template.html',
            bindings: {
                logoUri: '@',
                title: '@'
            },
            controller: 'HeaderComponentController',
            controllerAs: '$ctrl'
        });
})();
