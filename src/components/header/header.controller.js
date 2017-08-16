(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .controller('HeaderComponentController', HeaderComponentController);

    function HeaderComponentController($state, $attrs) {
        var $ctrl = this;
        $ctrl.$onInit = _onInit;

        function _onInit() {
            // TODO
        }
    }
})();
