function countBasketPrice() {
    var sum = 0;
    j = myBasket.getElementsByTagName('div').length
    for (let i = 0; i < j; i++) {
        sum = sum + (myBasket.getElementsByTagName('div')[i].childNodes[1].textContent * myBasket.getElementsByTagName('div')[i].childNodes[2].textContent)
    }
    return sum
}

var myBasket = document.getElementById('basket')


for (let j = 0; j < 3; j++) {
    var product = document.createElement('div')
    myBasket.appendChild(product).classList.add('Продукт' + (j + 1))
}

for (let i = 0; i < myBasket.childNodes.length - 1; i++) {
    var title = document.createElement('p')
    var price = document.createElement('p')
    var count = document.createElement('p')
    myBasket.getElementsByTagName('div')[i].appendChild(title).setAttribute('class', 'title')
    myBasket.getElementsByTagName('div')[i].appendChild(price).setAttribute('class', 'price')
    myBasket.getElementsByTagName('div')[i].appendChild(count).setAttribute('class', 'count')
}
myBasket.childNodes[1].childNodes[0].textContent = 'Продукт1'
myBasket.childNodes[1].childNodes[1].textContent = '1000'
myBasket.childNodes[1].childNodes[2].textContent = '3'

myBasket.childNodes[2].childNodes[0].textContent = 'Продукт2'
myBasket.childNodes[2].childNodes[1].textContent = '755'
myBasket.childNodes[2].childNodes[2].textContent = '5'

myBasket.childNodes[3].childNodes[0].textContent = 'Продукт3'
myBasket.childNodes[3].childNodes[1].textContent = '921'
myBasket.childNodes[3].childNodes[2].textContent = '5'

alert(countBasketPrice())