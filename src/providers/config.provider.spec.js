(() => {
    'use strict';

    describe('Provider: ConfigurationProvider', () => {
        var codeCompany,
            configuration,
            configurationGet,
            environment,
            host;

        beforeEach(() => {
            // Mock a module and config to take the provider and your methods
            angular.module('test.config', []);
            angular.module('test.config').config(testConfig);

            function testConfig(configurationProvider) {
                configuration = configurationProvider;
            };

            module('crossovervideoplayer', 'test.config');

            // get the $get of provider
            inject(($injector) => {
                configurationGet = $injector.get('configuration');
            });
        });

        it('Configuration has Defined', () => {
            expect(configuration).toBeDefined();
        });

        it('Localhost environment has ok', () => {
            host = 'localhost';
            environment = configuration.setAmbiente(host);
            expect(environment).toEqual('dev');
        });

        it('Development environment has ok', () => {
            host = 'dev.celulardireto.com.br';
            environment = configuration.setAmbiente(host);
            expect(environment).toEqual('dev');
        });

        it('Homolog environment has ok', () => {
            host = 'hmg.celulardireto.com.br';
            environment = configuration.setAmbiente(host);
            expect(environment).toEqual('homolog');
        });

        it('Homolog internal environment has ok', () => {
            host = 'hmg-celulardireto.com.br';
            environment = configuration.setAmbiente(host);
            expect(environment).toEqual('homologInterno');
        });

        it('Production environment has ok', () => {
            host = 'anything.celulardireto.com.br';
            environment = configuration.setAmbiente(host);
            expect(environment).toEqual('prod');
        });

        it('Infos to equal develop values', () => {
            expect(configurationGet.baseUrl).toEqual('//localhost:4000');
        });
    });
})();
