describe('service: catservice', function () {
    var $httpBackend, $rootScope, createController, authRequestHandler
    // load the controller's module
    beforeEach(module('app'));

    var CatsFactory;

    beforeEach(inject(function ($injector) {
        CatsFactory = $injector.get('CatsFactory');
        $httpBackend = $injector.get('$httpBackend');
        authRequestHandler = $httpBackend.when('GET', '/cats')
            .respond(
            [{
                "id": 0,
                "name": "bobcat3",
                "photo": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaVpwrHCYcDMicVCpIQZsrJaj_VIChN2ceZNtD2VH_zh8_4Z7DuQ",
                "votes": -3,
                "owner": "bob",
                "isviewed": true
            }, {
                "name": "larra",
                "photo": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5tKw7N6WotIEc8OPUxkydB6xRnO1uABtqE09E14WE5yY1Ru-G",
                "id": 2,
                "vote": 0,
                "owner": "alex",
                "votes": 8,
                "isviewed": true
            }, {
                "name": "catofalex1",
                "photo": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTX5WA2du9lrjag5YptApqFnZTMXlMXFB1GDidaUkqaI-4sR2SC",
                "id": 3,
                "vote": 0,
                "owner": "alex",
                "votes": 3,
                "isviewed": true
            }, {
                "name": "catsofbob3",
                "photo": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAeR4uXhNkKWLYz-SEVwbjk4gebkou3SVMbGR32gpzjC6h-2sh",
                "id": 4,
                "vote": 0,
                "owner": "bob",
                "votes": 1,
                "isviewed": true
            }]
        );
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return the list of cats', function () {
        var pr = CatsFactory.getCats();
        var expectedResult = [{
            "id": 0,
            "name": "bobcat3",
            "photo": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaVpwrHCYcDMicVCpIQZsrJaj_VIChN2ceZNtD2VH_zh8_4Z7DuQ",
            "votes": -3,
            "owner": "bob",
            "isviewed": true
        }, {
            "name": "larra",
            "photo": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5tKw7N6WotIEc8OPUxkydB6xRnO1uABtqE09E14WE5yY1Ru-G",
            "id": 2,
            "vote": 0,
            "owner": "alex",
            "votes": 8,
            "isviewed": true
        }, {
            "name": "catofalex1",
            "photo": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTX5WA2du9lrjag5YptApqFnZTMXlMXFB1GDidaUkqaI-4sR2SC",
            "id": 3,
            "vote": 0,
            "owner": "alex",
            "votes": 3,
            "isviewed": true
        }, {
            "name": "catsofbob3",
            "photo": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAeR4uXhNkKWLYz-SEVwbjk4gebkou3SVMbGR32gpzjC6h-2sh",
            "id": 4,
            "vote": 0,
            "owner": "bob",
            "votes": 1,
            "isviewed": true
        }];
        pr.then(
            function (response) {
                expect(response[0]).toBe(expectedResult[0]);
                expect(response[1]).toBe(expectedResult[1]);
                expect(response[2]).toBe(expectedResult[2]);
                expect(response[3]).toBe(expectedResult[3]);
            },
            function (error) {
            }
        )
        $httpBackend.flush();
    });

});