(() => {
    'use strict';

    describe('Controller: VideosPageController', () => {
        application.initModule();

        var VideosPageController, createController, $q, $rootScope,
            stateparams, controller, element = angular.element('<div></div>');

        beforeEach(inject(($compile, $injector, $controller, _$q_, _$rootScope_) => {
            controller = $controller;
            VideosPageController = $controller('VideosPageController', { $ctrl: $controller, $attrs: {} });
            $q = _$q_;
            $rootScope = _$rootScope_;
        }));

        it('VideosPageController should be defined', () => {
            expect(VideosPageController).toBeDefined();
        });
    });
})();
