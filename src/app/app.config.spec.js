(() => {
    'use strict';

    describe('App: Config', () => {
        var $locationProvider,
            config;

        beforeEach(() => {
            module((_$locationProvider_) => {
                $locationProvider = _$locationProvider_;
            });

            module('crossovervideoplayer');
            inject();
        });

        it('Defined', () => {
            expect($locationProvider.html5Mode()).toBeTruthy();
        });
    });
})();
