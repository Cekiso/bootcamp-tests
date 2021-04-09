describe('countAllPaarl', function() {
    it('returns the number of registration numbers in the string for Paarl.', function() {
        assert.equal(countAllPaarl("CJ 123"), 1);


    });
    it('It should return the number of registration numbers in the string for Paarl if not it should return 0.', function() {
        assert.equal(countAllPaarl(""), 0);
    });


});