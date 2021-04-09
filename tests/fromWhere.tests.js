describe('fromWhere', function() {
    it('It should return Cape Town', function() {
        assert.equal(fromWhere('CA'), 'Cape Town');


    });
    it('It should return some other place!', function() {
        assert.equal(fromWhere('GP'), 'Some other place!');

    });
});