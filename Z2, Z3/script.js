function countBasketPrice(arr) {
    var sum = 0;
    for (var i of arr) {
        sum = sum + (i.price * i.count)
    }
    return sum
}

function Product(title, price, count) {
    this.title = title;
    this.price = price;
    this.count = count;
}

var product1 = new Product('Покупка1', 1000, 3)
var product2 = new Product('Покупка2', 755, 7)
var product3 = new Product('Покупка3', 921, 5)

var bag = [product1, product2, product3]

//другой способ задания продукта
bag.push(new Product('Покупка4', 605, 1))

alert(countBasketPrice(bag))
