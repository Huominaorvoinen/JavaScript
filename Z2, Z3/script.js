function countBasketPrice(array) {
    var a = 0;
    for (let i = 0; i < array.length; i++) {
        a = a + array[i][1]
    }
    return a
}

var products = [
    ['product1', 5000],
    ['product2', 2500],
    ['product3', 500],
    ['product4', 1200]
];

alert(countBasketPrice(products))