(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .provider('configuration', configurationProvider);

    function configurationProvider() {
        var dev = /^dev\./,
            hmg = /^hmg\./,
            hmgInterno = /^hmg-/,
            host = location.hostname,
            local = /^localhost/,
            localIp = /^10\.17\.2\./,
            DOMINIO = {
                dev: '//localhost:4000',
                homolog: '//esb.webapihmg.cd.com',
                homologInterno: '//gtw-hmg-interno.celulardireto.com.br:8090',
                prod: 'https://gtw-insurance.wooza.com.br'
            },
            ENV = setAmbiente(host);

        // metodos publicos
        function setAmbiente(ambiente) {
            if (local.test(ambiente) || localIp.test(ambiente) || dev.test(ambiente)) {
                return 'dev';
            } else if (hmg.test(ambiente)) {
                return 'homolog';
            } else if (hmgInterno.test(ambiente)) {
                return 'homologInterno';
            }

            return 'prod';
        }

        function getDados() {
            return Object.freeze({
                baseUrl: DOMINIO[ENV],
            });
        }

        return {
            setAmbiente: setAmbiente,
            $get: getDados
        };
    };
}());
