(() => {
    'use strict';

    describe('Controller: HeaderComponentController', () => {
        application.initModule();

        var HeaderComponentController, createController, stateparams, AuthenticationService,
            controller, element = angular.element('<div></div>'), $q, $rootScope;

        beforeEach(inject(($compile, $injector, $controller, _$q_, _$rootScope_) => {
            $q = _$q_;
            $rootScope = _$rootScope_;
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


        it('doLogout method should be working', () => {
            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            AuthenticationService.doLogout.and.returnValue(deferred.promise);
            deferred.resolve({
                status: 'success'
            });

            HeaderComponentController.doLogout();

            $scope.$apply();

            expect(AuthenticationService.doLogout).toHaveBeenCalled();
        });
    });
})();
