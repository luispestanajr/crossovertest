'use strict';

var application = {
    initModule: function initModule() {
        beforeEach(() => {
            module('crossovervideoplayer', ($provide) => {
                $provide.constant('API_URL', '//esb.webapidev.cd.com/v1/api/');
                $provide.constant('AUTHORIZATION', '9ec365a9a6664414ac8927b1bda4744c');
                $provide.constant('ORIGIN_CODE', '9b519887127e42eab74cc1dd19b2a30d');
            });
        });
    }
};

describe('Module: application', () => {
    var module,
        dependencies = [];

    const hasModule = module => dependencies.indexOf(module) >= 0;

    application.initModule();

    it('Defined Modules', () => {
        expect(hasModule('crossovervideoplayer')).toBeDefined();
    });
});

