describe('regCheck' ,  function() {    
    it('should return the registration number of GP ' ,  function() {        
        assert.equal(regCheck("DS 56 GP", "GP"),  1);    
    });    
    it('should return the registration number of MP' ,  function() {        
        assert.equal(regCheck('DV 23 LP MP', 'MP'),  1);    
    });
    it('should return the registration number of EC' ,  function() {        
        assert.equal(regCheck('CE189-012 EC', 'EC'),  1);    
    });
});