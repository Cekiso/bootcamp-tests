function  regCheck(regNo, regEnd) {     return  regNo.endsWith(regEnd)     }    
console.log(regCheck("DS 56 GP", "GP"));    
console.log(regCheck('DV 23 LP MP',  'MP'));    
console.log(regCheck('CE189-012',  'EC'));    
console.log(regCheck('CY189-012',  'L'));