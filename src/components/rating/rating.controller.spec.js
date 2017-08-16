


(() => {
    'use strict';

    describe('Controller: RatingComponentController', () => {
        application.initModule();

        var RatingComponentController, AuthenticationService, createController, stateparams, $q, $rootScope,
            $ctrl, element = angular.element('<div></div>');

        beforeEach(inject(($compile, $injector, $controller, _$q_, _$rootScope_) => {
            $ctrl = $controller;
            $q = _$q_;
            $rootScope = _$rootScope_;
            AuthenticationService = $injector.get('AuthenticationService');
            RatingComponentController = $controller('RatingComponentController', { $ctrl: $controller, $attrs: {} });
        }));

        it('RatingComponentController should be defined', () => {
            expect(RatingComponentController).toBeDefined();
        });
    });
})();
