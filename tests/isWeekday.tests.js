describe('isWeekday', function() {
    it('should return true if its a week day', function() {
        assert.equal(isWeekday('Monday'), true);


    });
    it('should return false if is not a week day', function() {
        assert.equal(isWeekday('Saturday'), false);
    });

});