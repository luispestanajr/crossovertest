(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .service('HttpService', HttpService);

    /* @ngInject */
    function HttpService($http, $rootScope, configuration, usSpinnerService) {
        this.get = get;
        this.post = post;
        this.put = put;

        // metodos privados
        /* istanbul ignore next */
        function _erro(erro) {
            usSpinnerService.stop('spinner-content');
            console.error('Erro: ', erro);
            throw erro;
        }

        /* istanbul ignore next */
        function _sucesso(data, status, headers, config) {
            usSpinnerService.stop('spinner-content');
            return data.data;
        }

        // metodos publicos
        function get(url, parametros) {
            usSpinnerService.spin('spinner-content');
            return $http.get(url, { params: parametros })
                .then(_sucesso)
                .catch(_erro);
        }

        function post(url, parametros) {
            usSpinnerService.spin('spinner-content');

            return $http.post(url, parametros)
                .then(_sucesso)
                .catch(_erro);
        }

        function put(url, parametros) {
            usSpinnerService.spin('spinner-content');
            return $http.put(url, parametros)
                .then(_sucesso)
                .catch(_erro);
        }
    }
})();
