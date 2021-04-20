describe('transportFee', function() {
    it('In the morning it should returns the right price based on the shift you are working', function() {
        assert.equal(transportFee('morning'), 'R20');


    });
    it('In the afternoon it should returns the right price based on the shift you are working', function() {
        assert.equal(transportFee('afternoon'), 'R10');


    });
    it('In the nightshift it should returns free', function() {
        assert.equal(transportFee('nightshift'), 'free');


    });
});