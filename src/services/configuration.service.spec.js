(() => {
    'use strict';

    describe('Service: ConfigurationService', () => {
        application.initModule();

        var ConfigurationService;

        beforeEach(inject(($injector) => {
            ConfigurationService = $injector.get('ConfigurationService');
        }));

        it('service should be defined', () => {
            expect(ConfigurationService).toBeDefined();
        });
    });
})();
