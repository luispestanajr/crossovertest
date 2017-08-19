(() => {
    'use strict';

    describe('Controller: LoginComponentController', () => {
        application.initModule();

        var LoginComponentController, AuthenticationService, createController, stateparams, $q, $rootScope,
            $ctrl, element = angular.element('<div></div>');

        beforeEach(inject(($compile, $injector, $controller, _$q_, _$rootScope_) => {
            $ctrl = $controller;
            $q = _$q_;
            $rootScope = _$rootScope_;
            AuthenticationService = $injector.get('AuthenticationService');
            LoginComponentController = $controller('LoginComponentController', { $ctrl: $controller, $attrs: {} });
            spyOn(LoginComponentController, '$onInit').and.callThrough();
            spyOn(LoginComponentController, 'doLogin').and.callThrough();
            spyOn(AuthenticationService, 'getToken').and.callThrough();
            spyOn(AuthenticationService, 'saveToken').and.callThrough();
        }));

        it('LoginComponentController should be defined', () => {
            expect(LoginComponentController).toBeDefined();
        });

        it('$onInit method should be defined', () => {
            expect(LoginComponentController.$onInit).toBeDefined();
        });

        it('$onInit method should be working', () => {
            LoginComponentController.$onInit();
            expect(LoginComponentController.$onInit).toBeDefined();
        });

        it('doLogin method should be defined', () => {
            expect(LoginComponentController.doLogin).toBeDefined();
        });

        it('doLogin method should be working - invalid form', () => {
            let loginForm = {
                $valid: false
            };

            LoginComponentController.doLogin(loginForm);
            expect(LoginComponentController.doLogin).toHaveBeenCalled();
            expect(LoginComponentController.doLogin(loginForm)).toBe(false);
        });

        it('doLogin method should be working - valid form & credentials', () => {
            let loginForm = {
                $valid: true
            };

            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            $ctrl.loginForm = {
                username: 'user',
                password: '123'
            };

            LoginComponentController = $ctrl('LoginComponentController', { $ctrl }, { loginForm: $ctrl.loginForm });
            spyOn(LoginComponentController, 'doLogin').and.callThrough();
            spyOn(AuthenticationService, 'doAuthentication').and.returnValue(deferred.promise);

            deferred.resolve({
                sessionId: 'GENERATED TOKEN'
            });

            LoginComponentController.doLogin(loginForm);

            $scope.$apply();
            expect(LoginComponentController.doLogin).toHaveBeenCalled();
            expect(AuthenticationService.doAuthentication).toHaveBeenCalled();
            expect(AuthenticationService.saveToken).toHaveBeenCalled();
            expect(AuthenticationService.getToken()).toBe('GENERATED TOKEN');
        });

        it('doLogin method should be working - valid form & invalid credentials', () => {
            let loginForm = {
                $valid: true
            };

            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            $ctrl.loginForm = {
                username: 'user',
                password: '123'
            };

            LoginComponentController = $ctrl('LoginComponentController', { $ctrl }, { loginForm: $ctrl.loginForm });
            spyOn(LoginComponentController, 'doLogin').and.callThrough();
            spyOn(AuthenticationService, 'doAuthentication').and.returnValue(deferred.promise);

            deferred.resolve({
                error: 'user or password is incorrect'
            });

            LoginComponentController.doLogin(loginForm);

            $scope.$apply();
            expect(LoginComponentController.doLogin).toHaveBeenCalled();
            expect(AuthenticationService.doAuthentication).toHaveBeenCalled();
            //expect(AuthenticationService.getToken()).toBeUndefined();
        });

        it('doLogin method should be working - valid form (exception handling)', () => {
            let loginForm = {
                $valid: true
            };

            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            $ctrl.loginForm = {
                username: 'user',
                password: '123'
            };

            LoginComponentController = $ctrl('LoginComponentController', { $ctrl }, { loginForm: $ctrl.loginForm });
            spyOn(LoginComponentController, 'doLogin').and.callThrough();
            spyOn(AuthenticationService, 'doAuthentication').and.returnValue(deferred.promise);

            deferred.reject({
                data: {
                    error: 'user or password is missing'
                }
            });

            LoginComponentController.doLogin(loginForm);

            $scope.$apply();
            expect(LoginComponentController.doLogin).toHaveBeenCalled();
            expect(AuthenticationService.doAuthentication).toHaveBeenCalled();
            //expect(AuthenticationService.getToken()).toBeUndefined();
        });
    });
})();
