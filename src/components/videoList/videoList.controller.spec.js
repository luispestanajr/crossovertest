(() => {
    'use strict';

    describe('Controller: VideoListComponentController', () => {
        application.initModule();

        var VideoListComponentController, AuthenticationService, createController, stateparams, $q, $rootScope,
            $ctrl, element = angular.element('<div></div>');

        beforeEach(inject(($compile, $injector, $controller, _$q_, _$rootScope_) => {
            $ctrl = $controller;
            $q = _$q_;
            $rootScope = _$rootScope_;
            AuthenticationService = $injector.get('AuthenticationService');
            VideoListComponentController = $controller('VideoListComponentController', { $ctrl: $controller, $attrs: {} });
        }));

        it('VideoListComponentController should be defined', () => {
            expect(VideoListComponentController).toBeDefined();
        });
    });
})();
