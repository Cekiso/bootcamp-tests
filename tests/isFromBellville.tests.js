describe('isFromBellville', function() {
    it('should returns true if a registration number is for Bellville', function() {
        assert.equal(isFromBellville("CY "), true);


    });
    it('should returns false if the registratrion number is from Bellville', function() {
        assert.equal(isFromBellville("CA "), false);
    });
});