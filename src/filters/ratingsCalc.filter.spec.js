(() => {
    'use strict';

    describe('Filter: ratingsCalc', () => {
        application.initModule();

        var $filter;

        beforeEach(inject((_$filter_) => {
            $filter = _$filter_;
        }));

        it('ratingsCalc should be working', () => {
            var ratings = [5, 2, 3, 4];
            var result = $filter('ratingsCalc')(ratings, 'ratingsCalcFilter');
        });
    });
})();
