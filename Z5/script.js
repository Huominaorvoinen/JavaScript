function suma(a, b) {
    return (a + b)
}
function minus(a, b) {
    return (a - b)
}
function umnozhenie(a, b) {
    return (a * b)
}
function delenie(a, b) {
    return (a / b)
}

var a = parseInt(prompt("введите первое число"));
var b = parseInt(prompt("введите второе число"));


alert(suma(a, b));
alert(minus(a, b));
alert(umnozhenie(a, b));
alert(delenie(a, b));