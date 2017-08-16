(() => {
    'use strict';

    describe('Service: AuthenticationService', () => {
        application.initModule();

        var AuthenticationService;

        beforeEach(inject(($injector) => {
            AuthenticationService = $injector.get('AuthenticationService');
            spyOn(AuthenticationService, 'doAuthentication').and.callThrough();
        }));

        it('service should be defined', () => {
            expect(AuthenticationService).toBeDefined();
        });

        it('doAuthentication method should be working', () => {
            var params = {};
            AuthenticationService.doAuthentication(params);
            expect(AuthenticationService.doAuthentication).toHaveBeenCalled();
        });
    });
})();
