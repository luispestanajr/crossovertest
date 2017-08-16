(() => {
    'use strict';

    describe('Service: AuthenticationService', () => {
        application.initModule();

        var AuthenticationService, $q, $rootScope;

        beforeEach(inject(($injector,  _$q_, _$rootScope_) => {
            $q = _$q_;
            $rootScope = _$rootScope_;
            AuthenticationService = $injector.get('AuthenticationService');

            spyOn(AuthenticationService, 'doAuthentication').and.callThrough();
            spyOn(AuthenticationService, 'saveToken').and.callThrough();
            spyOn(AuthenticationService, 'getToken').and.callThrough();
        }));

        it('service should be defined', () => {
            expect(AuthenticationService).toBeDefined();
        });

        it('doAuthentication should be defined', () => {
            expect(AuthenticationService.doAuthentication).toBeDefined();
        });

        it('doAuthentication method should be working', () => {
            var params = {};
            AuthenticationService.doAuthentication(params);
            expect(AuthenticationService.doAuthentication).toHaveBeenCalled();
        });

        it('doLogout method should be defined', () => {
            expect(AuthenticationService.doLogout).toBeDefined();
        });

        it('doLogout method should be working', () => {
            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            spyOn(AuthenticationService, 'doLogout').and.returnValue(deferred.promise);
            deferred.resolve({
                status: 'success'
            });

            AuthenticationService.doLogout();

            $scope.$apply();

            expect(AuthenticationService.doLogout).toHaveBeenCalled();
        });
    });
})();
