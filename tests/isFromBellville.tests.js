describe('isFromBellville', function() {
    it('should returns true if a registration number is for Bellville', function() {
        assert.equal(isFromBellville("CY 123"), true);


    });
    it('should returns false if the registratrion number is from Bellville', function() {
        assert.equal(isFromBellville("CA 123"), false);
    });

    it('should returns false if the registratrion number is from Bellville', function() {
        assert.equal(isFromBellville("GP 123"), false);
    });
});