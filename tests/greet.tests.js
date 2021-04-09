describe('greet', function() {
    it('should returns hello, Janine', function() {
        assert.equal(greet("Janine"), "Hello, Janine");


    });

    it('should returns hello, Nkuli', function() {
        assert.equal(greet("Nkuli"), "Hello, Nkuli");
    });
});