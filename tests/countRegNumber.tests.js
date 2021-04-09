describe('countRegNumber', function() {
    it('It should return the number of registration numbers in the string which is three', function() {
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);


    });
    it('It should return the number of registration numbers in the string which is two', function() {
        assert.equal(countRegNumber('CA 182736,CY 523519'), 2);
    });
});