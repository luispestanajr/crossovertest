(() => {
    'use strict';

    describe('Filter: trustUrlFilter', () => {
        application.initModule();

        var $filter;

        beforeEach(inject((_$filter_) => {
            $filter = _$filter_;
        }));

        it('ratingsCalc should be working', () => {
            var url = 'someURL';
            var result = $filter('trustUrl')(url, 'trustUrlFilter');
        });
    });
})();
