(() => {
    'use strict';

    describe('Controller: HeaderComponentController', () => {
        application.initModule();

        var HeaderComponentController, createController, stateparams, AuthenticationService,
            controller, element = angular.element('<div></div>');

        beforeEach(inject(($compile, $injector, $controller) => {
            controller = $controller;
            AuthenticationService = $injector.get('AuthenticationService');
            HeaderComponentController = $controller('HeaderComponentController', { $ctrl: $controller, $attrs: {} });
            spyOn(HeaderComponentController, 'logOut').and.callThrough();
            spyOn(AuthenticationService, 'doLogout').and.callThrough();
        }));

        it('HeaderComponentController should be defined', () => {
            expect(HeaderComponentController).toBeDefined();
        });

        it('logOut method should be defined', () => {
            expect(HeaderComponentController.logOut).toBeDefined();
        });

        it('logOut method should be working', () => {
            HeaderComponentController.logOut();
            expect(HeaderComponentController.logOut).toHaveBeenCalled();
            expect(AuthenticationService.doLogout).toHaveBeenCalled();
        });
    });
})();
