(function() {
    'use strict';

    angular
        .module('crossovervideoplayer')
        .service('ParametrosService', ParametrosService);

    /* @ngInject */
    function ParametrosService($location) {
        this.parametros = $location.search();
        this.analytics = {
            'utm_campaign': this.parametros.utm_campaign,
            'utm_content': this.parametros.utm_content,
            'utm_medium': this.parametros.utm_medium,
            'utm_source': this.parametros.utm_source,
            'utm_term': this.parametros.utm_term
        };

        this.bko = {
            'u': this.parametros.u,
            'codigo_origem': this.parametros.codigo_origem
        };

        this.configProjeto = {
            'ddd': this.parametros.ddd,
            'uf': this.parametros.uf,
            'plataforma': this.parametros.plataforma,
            'plano': this.parametros.plano,
            'sku': this.parametros.sku
        };
    }
})();
