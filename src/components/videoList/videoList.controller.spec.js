(() => {
    'use strict';

    describe('Controller: VideoListComponentController', () => {
        application.initModule();

        var VideoListComponentController, AuthenticationService, createController, stateparams, $q, $rootScope,
            injector, $ctrl, element = angular.element('<div></div>'), VideoService;

        beforeEach(inject(($compile, $injector, $controller, _$q_, _$rootScope_) => {
            $ctrl = $controller;
            $q = _$q_;
            $rootScope = _$rootScope_;
            injector = $injector;
            AuthenticationService = $injector.get('AuthenticationService');
            VideoService = $injector.get('VideoService');
            VideoListComponentController = $controller('VideoListComponentController', { $ctrl: $controller, $attrs: {} });
            spyOn(VideoListComponentController, '$onInit').and.callThrough();
            spyOn(VideoListComponentController, 'pagings').and.callThrough();
            spyOn(VideoListComponentController, 'onRating').and.callThrough();
            spyOn(AuthenticationService, 'getToken').and.callThrough();
        }));

        it('VideoListComponentController should be defined', () => {
            expect(VideoListComponentController).toBeDefined();
        });

        it('$onInit method should be defined', () => {
            expect(VideoListComponentController.$onInit).toBeDefined();
        });

        it('$onInit method should be working - user not logged', () => {
            AuthenticationService.getToken.and.returnValue(false);
            VideoListComponentController.$onInit();
            expect(VideoListComponentController.$onInit).toHaveBeenCalled();
        });

        it('$onInit method should be working', () => {
            VideoListComponentController.$onInit();
            expect(VideoListComponentController.$onInit).toHaveBeenCalled();
        });

        it('pagings method should be defined', () => {
            expect(VideoListComponentController.pagings).toBeDefined();
        });

        it('pagings method should be working', () => {
            VideoListComponentController.pagings();
            expect(VideoListComponentController.pagings).toHaveBeenCalled();
        });

        it('pagings method should be working - able to load more videos', () => {
            VideoListComponentController.loadingMoreVideos = false;
            VideoListComponentController.pagings();
            expect(VideoListComponentController.pagings).toHaveBeenCalled();
        });

        it('onRating method should be defined', () => {
            expect(VideoListComponentController.onRating).toBeDefined();
        });

        it('onRating method should be working', () => {
            VideoListComponentController.playingVideo = {
                _id: 10
            };
            VideoListComponentController.onRating(5);
            expect(VideoListComponentController.onRating).toHaveBeenCalled();
        });

        it('loadVideos method should be working', () => {
            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            spyOn(VideoService, 'getVideos').and.returnValue(deferred.promise);

            VideoListComponentController.loadVideos();

            deferred.resolve({
                data: [{_id: 1}, {_id: 231}]
            });

            $scope.$apply();
            expect(VideoListComponentController.videos.length).toBe(2);
            expect(VideoListComponentController.videos[1]._id).toBe(231);
            expect(VideoListComponentController.loadingMoreVideos).toBe(false);
        });

        it('loadVideos method should handle exceptions in VideoService.getVideos call', () => {
            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            spyOn(VideoService, 'getVideos').and.returnValue(deferred.promise);
            spyOn(toastr, 'error').and.callThrough();

            VideoListComponentController.loadVideos();

            deferred.reject();

            $scope.$apply();
            expect(VideoListComponentController.videos.length).toBe(0);
            expect(toastr.error).toHaveBeenCalled();
            expect(VideoListComponentController.loadingMoreVideos).toBe(false);
        });

        it('onRating method should be working', () => {
            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            spyOn(VideoService, 'rateVideo').and.returnValue(deferred.promise);

            VideoListComponentController.playingVideo = {
                _id: 2,
                ratings: []
            };

            VideoListComponentController.videos = [
                {
                    _id: 2
                }
            ];

            VideoListComponentController.onRating(2);

            deferred.resolve({
                data: [{rating: 1}]
            });

            $scope.$apply();
            expect(VideoListComponentController.playingVideo.ratings.length).toBe(1);
            expect(VideoListComponentController.hadRated).toBe(true);
        });

        it('onRating method should handle exceptions in VideoService.rateVideo call', () => {
            let deferred = $q.defer();
            let promise = deferred.promise;
            let $scope = $rootScope.$new();

            spyOn(VideoService, 'rateVideo').and.returnValue(deferred.promise);
            spyOn(toastr, 'error').and.callThrough();

            VideoListComponentController.playingVideo = {
                _id: 2,
                ratings: []
            };

            VideoListComponentController.videos = [
                {
                    _id: 2
                }
            ];

            VideoListComponentController.onRating(2);

            deferred.reject();

            $scope.$apply();
            expect(VideoListComponentController.playingVideo.ratings.length).toBe(0);
            expect(toastr.error).toHaveBeenCalled();
        });
    });
})();
