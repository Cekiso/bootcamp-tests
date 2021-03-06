describe('findItemsOver', function() {
    it('should return products that have quantity higher than 20.', function() {
        assert.deepEqual(
            findItemsOver([
                { "name": "apples", "qty": 10 },
                { "name": "pears", "qty": 37 },
                { "name": "bananas", "qty": 27 },
                { "name": "apples", "qty": 3 }
            ], 20), [
                { "name": "pears", "qty": 37 },
                { "name": "bananas", "qty": 27 }
            ]);
    });

    it('should return products that have quantity higher than 30.', function() {
        assert.deepEqual(
            findItemsOver([
                { "name": "apples", "qty": 10 },
                { "name": "pears", "qty": 37 },
                { "name": "bananas", "qty": 27 },
                { "name": "apples", "qty": 3 }
            ], 30), [
                { "name": "pears", "qty": 37 },

            ]);
    });
});