(() => {
    'use strict';

    describe('Controller: MainPageController', () => {
        application.initModule();

        var MainPageController, createController, $q, $rootScope,
            stateparams, controller, element = angular.element('<div></div>');

        beforeEach(inject(($compile, $injector, $controller, _$q_, _$rootScope_) => {
            controller = $controller;
            MainPageController = $controller('MainPageController', { $ctrl: $controller, $attrs: {} });
            $q = _$q_;
            $rootScope = _$rootScope_;
        }));

        it('MainPageController should be defined', () => {
            expect(MainPageController).toBeDefined();
        });
    });
})();
