function fromWhere(regNo) {
    switch (regNo) {
        case 'CY 123':
            return 'Bellville';
        case 'CJ 123':
            return 'Paarl';
        case 'CA 123':
            return 'Cape Town';
        default:
            return 'Some other place!';
    }
}
console.log(fromWhere('CY 123'));
console.log(fromWhere('CJ 123'));
console.log(fromWhere('CA 123'));
console.log(fromWhere(''), 'Some other place!');