(() => {
    'use strict';

    describe('Service: VideoService', () => {
        application.initModule();

        var VideoService;
        var ConfigurationService;

        beforeEach(inject(function($injector) {
            VideoService = $injector.get('VideoService');
            ConfigurationService = $injector.get('ConfigurationService');
            spyOn(VideoService, 'getVideos').and.callThrough();
            spyOn(VideoService, 'getVideo').and.callThrough();
            spyOn(VideoService, 'rateVideo').and.callThrough();
        }));

        it('VideoService has Defined', () => {
            expect(VideoService).toBeDefined();
        });

        it('videosURI property should be defined', () => {
            expect(VideoService.videosURI).toBeDefined();
        });

        it('videosURI property should be same as defined in ConfigurationService', () => {
            expect(VideoService.videosURI).toBe(ConfigurationService.videosURI);
        });

        it('videoURI property should be defined', () =>  {
            expect(VideoService.videoURI).toBeDefined();
        });

        it('videoURI property should be same as defined in ConfigurationService', () =>  {
            expect(VideoService.videoURI).toBe(ConfigurationService.videoURI);
        });

        it('rateVideoURI property should be defined', () =>  {
            expect(VideoService.rateVideoURI).toBeDefined();
        });

        it('rateVideoURI property should be same as defined in ConfigurationService', () =>  {
            expect(VideoService.rateVideoURI).toBe(ConfigurationService.rateVideoURI);
        });

        it('Method getVideos should be defined', () => {
            expect(VideoService.getVideos).toBeDefined();
        });

        it('Method getVideos should be working', () => {
            VideoService.getVideos('SESSION_ID_MOCK', 1, 10);
            expect(VideoService.getVideos).toHaveBeenCalled();
        });

        it('Method getVideo should be define', () => {
            expect(VideoService.getVideo).toBeDefined();
        });

        it('Method getVideo should be working', () => {
            VideoService.getVideo('SESSION_ID_MOCK', 10001);
            expect(VideoService.getVideo).toHaveBeenCalled();
        });

        it('Method rateVideo should be defined', () => {
            expect(VideoService.rateVideo).toBeDefined();
        });

        it('Method rateVideo should be working', () => {
            VideoService.rateVideo(10001, 5);
            expect(VideoService.rateVideo).toHaveBeenCalled();
        });
    });
})();
