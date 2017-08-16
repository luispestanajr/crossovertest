(() => {
    'use strict';

    describe('Service: ConfigurationService', () => {
        application.initModule();

        var ConfigurationService;

        beforeEach(inject(($injector) => {
            ConfigurationService = $injector.get('ConfigurationService');
            spyOn(ConfigurationService, 'clearToken').and.callThrough();
            spyOn(ConfigurationService, 'saveToken').and.callThrough();
            spyOn(ConfigurationService, 'getToken').and.callThrough();
        }));

        it('service should be defined', () => {
            expect(ConfigurationService).toBeDefined();
        });

        it('saveToken method should be defined', () => {
            expect(ConfigurationService.saveToken).toBeDefined();
        });

        it('saveToken method should be working', () => {
            ConfigurationService.saveToken('SOME TOKEN');
            expect(ConfigurationService.saveToken).toHaveBeenCalled();
            expect(ConfigurationService.sessionID).toBe('SOME TOKEN');
        });

        it('getToken method should be defined', () => {
            expect(ConfigurationService.getToken).toBeDefined();
        });

        it('getToken method should be working', () => {
            ConfigurationService.saveToken('SOME TOKEN');
            ConfigurationService.getToken();
            expect(ConfigurationService.saveToken).toHaveBeenCalled();
            expect(ConfigurationService.getToken).toHaveBeenCalled();
            expect(ConfigurationService.getToken()).toBe('SOME TOKEN');
        });

        it('clearToken method should be defined', () => {
            expect(ConfigurationService.clearToken).toBeDefined();
        });

        it('clearToken method should be working', () => {
            ConfigurationService.sessionID = 'SOME SESSION ID';
            ConfigurationService.clearToken();
            expect(ConfigurationService.clearToken).toHaveBeenCalled();
            expect(ConfigurationService.sessionID).toBeUndefined();
        });     
    });
})();
