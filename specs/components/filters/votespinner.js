/**
 * Created by Oleksandr_Generalov on 10/27/2015.
 */
describe('filter: votespinner', function () {
    var filter;
    beforeEach(module('app'));

    beforeEach(inject(function (voteFilter) {
        filter = voteFilter;
    }));


    it('should return positive smile', function () {
        var result = filter(10);
        var expectedResult = '<img src = "http://localhost/images/neutral.jpg">';
        expect(result).toBe(expectedResult);

    });

    it('should return negative smile', function () {
        var result = filter(-1);
        var expectedResult = '<img src = http://localhost/images/negative.jpg">';
        expect(result).toBe(expectedResult);

    });

});