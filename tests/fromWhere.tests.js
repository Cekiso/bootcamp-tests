describe('fromWhere', function() {
    it('It should return Cape Town', function() {
        assert.equal(fromWhere('CA 123'), 'Cape Town');


    });
    it('It should return some other place!', function() {
        assert.equal(fromWhere('GP 123'), 'Some other place!');

    });
});