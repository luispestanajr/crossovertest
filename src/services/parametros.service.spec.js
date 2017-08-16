(() => {
    'use strict';

    describe('Service: ParametrosService', () => {
        application.initModule();

        var ParametrosService;

        beforeEach(inject(function($injector) {
            ParametrosService = $injector.get('ParametrosService');
        }));

        it('Service has Defined', () => {
            expect(ParametrosService).toBeDefined();
            expect(ParametrosService.parametros).toBeDefined();
            expect(ParametrosService.analytics).toBeDefined();
            expect(ParametrosService.bko).toBeDefined();
            expect(ParametrosService.configProjeto).toBeDefined();
        });
    });
})();
