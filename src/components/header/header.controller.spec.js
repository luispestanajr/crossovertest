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
            spyOn(HeaderComponentController, 'doLogout').and.callThrough();
            spyOn(AuthenticationService, 'doLogout').and.callThrough();
        }));

        it('HeaderComponentController should be defined', () => {
            expect(HeaderComponentController).toBeDefined();
        });

        it('doLogout method should be defined', () => {
            expect(HeaderComponentController.doLogout).toBeDefined();
        });

        it('doLogout method should be working', () => {
            HeaderComponentController.doLogout();
            expect(HeaderComponentController.doLogout).toHaveBeenCalled();
            expect(AuthenticationService.doLogout).toHaveBeenCalled();
        });
    });
})();
