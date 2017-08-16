(() => {
    'use strict';

    describe('Controller: HeaderComponentController', () => {
        application.initModule();

        var HeaderComponentController, createController, stateparams, controller, element = angular.element('<div></div>');

        beforeEach(inject(($compile, $injector, $controller) => {
            controller = $controller;
            HeaderComponentController = $controller('HeaderComponentController', { $ctrl: $controller, $attrs: {} });
            spyOn(HeaderComponentController, '$onInit').and.callThrough();
        }));

        it('HeaderComponentController should be defined', () => {
            expect(HeaderComponentController).toBeDefined();
        });

        it('$onInit method should be working', () => {
            HeaderComponentController.$onInit();
            expect(HeaderComponentController.$onInit).toHaveBeenCalled();
        });
    });
})();
