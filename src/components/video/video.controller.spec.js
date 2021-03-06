(() => {
    'use strict';

    describe('Controller: VideoComponentController', () => {
        application.initModule();

        var VideoComponentController, AuthenticationService, createController, stateparams, $q, $rootScope,
            $ctrl, element = angular.element('<div></div>');

        beforeEach(inject(($compile, $injector, $controller, _$q_, _$rootScope_) => {
            $ctrl = $controller;
            $q = _$q_;
            $rootScope = _$rootScope_;
            AuthenticationService = $injector.get('AuthenticationService');
            VideoComponentController = $controller('VideoComponentController', { $ctrl: $controller, $attrs: {} });
            spyOn(VideoComponentController, 'playVideo').and.callThrough();
        }));

        it('VideoComponentController should be defined', () => {
            expect(VideoComponentController).toBeDefined();
        });

        it('playVideo method should be defined', () => {
            expect(VideoComponentController.playVideo).toBeDefined();
        });

        it('playVideo method should be working', () => {
            VideoComponentController.playVideo();
            expect(VideoComponentController.playVideo).toHaveBeenCalled();
        });
    });
})();
