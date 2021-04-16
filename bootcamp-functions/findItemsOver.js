function findItemsOver(itemList, threshold) {
    var product = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > threshold) {
            product.push(itemList[i])
        }
    }
    return product
}