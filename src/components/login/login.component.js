(() => {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .component('crossLogin', {
            templateUrl: 'components/login/login.template.html',
            controller: 'LoginComponentController',
            controllerAs: '$ctrl'
        });
})();
